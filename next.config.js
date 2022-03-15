/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    HOST: process.env.HOST,
    AUTH_ENDPOINT: process.env.AUTH_ENDPOINT,
    AUTH_USERNAME: process.env.AUTH_USERNAME,
    AUTH_PASSWORD: process.env.AUTH_PASSWORD,
    LOGOUT_ENDPOINT: process.env.LOGOUT_ENDPOINT,
  },
};
