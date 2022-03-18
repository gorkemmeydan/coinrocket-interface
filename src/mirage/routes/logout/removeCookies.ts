const removeCookies = () => {
  document.cookie = `accessToken=`;
  document.cookie = `refreshToken=`;

  return {};
};

export default removeCookies;
