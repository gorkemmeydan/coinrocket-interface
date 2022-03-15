// @ts-nocheck
import httpProxy from 'http-proxy';
import Cookies from 'cookies';
import url from 'url';

import {
  API_URL,
  AUTH_ENDPOINT,
  LOGOUT_ENDPOINT,
  PROXY_LOGIN,
  PROXY_LOGOUT,
  PROXY_REFRESH,
} from '../../config/';

const proxy = httpProxy.createProxyServer();

// You can export a config variable from any API route in Next.js.
// We'll use this to disable the bodyParser, otherwise Next.js
// would read and parse the entire request body before we
// can forward the request to the API. By skipping the bodyParser,
// we can just stream all requests through to the actual API.
export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  // Return a Promise to let Next.js know when we're done
  // processing the request:
  return new Promise((resolve, reject) => {
    // In case the current API request is for logging in or refresh token,
    // we'll need to intercept the API response.
    // More on that in a bit.
    const pathname = url.parse(req.url).pathname;
    const isLogin = pathname === PROXY_LOGIN;
    const isRefresh = pathname === PROXY_REFRESH;
    const isLogout = pathname === PROXY_LOGOUT;

    // Get the `auth-token` cookie:
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get('accessToken');
    const refreshToken = cookies.get('refreshToken');

    // Rewrite the URL: for login and refresh token case
    if (isLogin || isRefresh) {
      req.url = AUTH_ENDPOINT;
    }

    if (isLogout) {
      req.url = LOGOUT_ENDPOINT;
    }

    // Don't forward cookies to the API:
    req.headers.cookie = '';
    // Set auth-token header from cookie:
    if (accessToken) {
      req.headers['Authorization'] = `Bearer ${accessToken}`;
      req.headers['Content-Type'] = 'application/json';
    }

    // In case the request is for login or refresh, we need to
    // intercept the API's response. It contains the
    // auth token that we want to strip out and set
    // as an HTTP-only cookie.
    if (isLogin || isRefresh) {
      proxy.once('proxyRes', interceptLoginOrRefreshResponse);
    }

    // clear the httpcookies for logout
    if (isLogout) {
      proxy.once('proxyRes', interceptLogoutResponse);
    }

    // in case for refresh token, we want to modify request body
    proxy.on('proxyReq', function (proxyReq, req, res, options) {
      if (isRefresh && refreshToken) {
        // Remove body-parser body object from the request
        if (req.body) delete req.body;

        let body = new Object();
        body.grant_type = 'refresh_token';
        body.refresh_token = refreshToken;

        // URI encode JSON object
        body = Object.keys(body)
          .map(function (key) {
            return (
              encodeURIComponent(key) + '=' + encodeURIComponent(body[key])
            );
          })
          .join('&');

        // Update header
        proxyReq.setHeader('content-type', 'application/x-www-form-urlencoded');
        proxyReq.setHeader('content-length', body.length);

        // Write out body changes to the proxyReq stream
        proxyReq.write(body);
      }
    });

    // Don't forget to handle errors:
    proxy.once('error', reject);

    // Forward the request to the API
    proxy.web(req, res, {
      target: API_URL,
      // Don't autoRewrite because we manually rewrite
      // the URL in the route handler.
      autoRewrite: false,

      // In case we're dealing with a login or refresh token request,
      // we need to tell http-proxy that we'll handle
      // the client-response ourselves (since we don't
      // want to pass along the auth token).
      selfHandleResponse: isLogin || isRefresh || isLogout,
    });

    function interceptLoginOrRefreshResponse(proxyRes, req, res) {
      // Read the API's response body from
      // the stream:
      let apiResponseBody = '';
      proxyRes.on('data', (chunk) => {
        apiResponseBody += chunk;
      });

      // Once we've read the entire API
      // response body, we're ready to
      // handle it:
      proxyRes.on('end', () => {
        try {
          // Extract the authToken from API's response:
          const { access_token, refresh_token } = JSON.parse(apiResponseBody);
          // Set the authToken as an HTTP-only cookie.
          // We'll also set the SameSite attribute to
          // 'lax' for some additional CSRF protection.
          const cookies = new Cookies(req, res);
          cookies.set('accessToken', access_token, {
            httpOnly: true,
            sameSite: 'lax',
          });
          cookies.set('refreshToken', refresh_token, {
            httpOnly: true,
            sameSite: 'lax',
          });
          // Our response to the client won't contain
          // the actual authToken. This way the auth token
          // never gets exposed to the client.
          res.status(200).json({ loggedIn: true });
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }

    function interceptLogoutResponse(proxyRes, req, res) {
      let apiResponseBody = '';
      proxyRes.on('data', (chunk) => {
        apiResponseBody += chunk;
      });

      proxyRes.on('end', () => {
        try {
          // clear cookies
          const cookies = new Cookies(req, res);
          cookies.set('accessToken', undefined, {
            httpOnly: true,
            sameSite: 'lax',
          });
          cookies.set('refreshToken', undefined, {
            httpOnly: true,
            sameSite: 'lax',
          });
          res.status(200).json({ loggedIn: false });
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }
  });
};
