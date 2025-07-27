export const BASE_URL = "https://dineconnect-backend-latest.onrender.com/api";
export const getToken = () => {
    const token = localStorage.getItem('token');
    return "Bearer " + token;
}
export const getRole = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const base64Payload = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(base64Payload));
        return decodedPayload.role;
    }
}