import axios from "axios";
const baseUrl = "/api/v1/users/";

const signup = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const exportedObject = { signup };

export default exportedObject;
