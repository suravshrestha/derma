import axios from "axios";
const baseUrl = "/api/v1/dj-rest-auth/registration/";

const signup = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const exportedObject = { signup };

export default exportedObject;
