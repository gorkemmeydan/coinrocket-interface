import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { useRouter } from 'next/router';
import { AUTH_PASSWORD, AUTH_USERNAME, PROXY_REFRESH } from 'config';

const axiosInstance = axios.create({
  withCredentials: true,
});

// Create axios interceptor
createAuthRefreshInterceptor(axiosInstance, (failedRequest) =>
  // 1. First try request fails - refresh the token.
  axiosInstance
    .post(
      PROXY_REFRESH,
      {},
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        auth: {
          username: AUTH_USERNAME,
          password: AUTH_PASSWORD,
        },
      }
    )
    .then((resp) => {
      // retry if we got new access token
      return Promise.resolve();
    })
    .catch(function (error) {
      console.log('Session tokens are invalid or expired');
      // clear tokens if exist
      // setTokens(undefined, undefined);
      const router = useRouter();
      router.push('/login?session=true');
    })
);

export default axiosInstance;
