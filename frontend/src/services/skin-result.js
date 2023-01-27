import userService from "./user";
import axios from "axios";

const baseUrl = "/api/v1/skin-results";

const uploadSkinImage = async (imageObj) => {
  const formData = new FormData();
  formData.append("skinImage", imageObj);

  const response = await axios.post(baseUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${userService.getToken()}`,
    },
  });

  return response.data;
};

const getPreviousResults = async () => {
  const response = await axios.get(baseUrl, {
    headers: {
      Authorization: `Bearer ${userService.getToken()}`,
    },
  });

  return response.data;
};

const getResultById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${userService.getToken()}`,
    },
  });

  return response.data;
};

const exportedObject = { uploadSkinImage, getPreviousResults, getResultById };

export default exportedObject;
