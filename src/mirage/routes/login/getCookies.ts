const getCookies = () => {
  document.cookie = `accessToken=123`;
  document.cookie = `refreshToken=123`;

  return {
    loggedIn: true,
  };
};

export default getCookies;
