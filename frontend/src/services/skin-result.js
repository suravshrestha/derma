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

const exportedObject = { uploadSkinImage };

export default exportedObject;
