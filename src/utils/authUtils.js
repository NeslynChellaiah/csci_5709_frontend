import { store } from '../store';

export const getTokenFromStore = () => {
  const state = store.getState();
  const token = state.auth.token;
  return token ? "Bearer " + token : null;
};

export const getRoleFromStore = () => {
  const state = store.getState();
  const token = state.auth.token;
  if (token) {
    try {
      const base64Payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(base64Payload));
      console.log(decodedPayload?.role);
      return decodedPayload.role;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  return null;
}; 