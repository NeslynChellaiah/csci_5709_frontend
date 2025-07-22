export const BASE_URL = "https://dineconnect-backend-latest.onrender.com/api";
export const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const base64Payload = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(base64Payload));
        console.log(decodedPayload, "????????");
    }
    return "Bearer " + token;

}