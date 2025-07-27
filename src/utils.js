export const isTokenExpired = (token = null) => {
  const tokenToCheck = token;
  if (!tokenToCheck) return true;

  try {
    const payload = JSON.parse(atob(tokenToCheck.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp < currentTime;
  } catch (e) {
    console.error('Invalid token', e);
    return true;
  }
};
