import axios from "axios";
const baseUrl = "/api/v1/dj-rest-auth/login/";

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const exportedObject = { login };

export default exportedObject;
