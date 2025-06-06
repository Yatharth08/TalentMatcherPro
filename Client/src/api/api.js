import axios from 'axios';
import config from '../config/config.js';

const apiClient = axios.create({
    baseURL: config.API_BASE_URL
});

export async function getSignedUrl({ key, content_type }) {
    const response = await apiClient.post("/s3/signed_url", {
        key,
        content_type,
    });

    return response.data;
}

export async function uploadFileToSignedUrl(
    signedUrl,
    file,
    contentType,
    onProgress,
    onComplete
  ) {
    axios
      .put(signedUrl, file, {
        onUploadProgress: onProgress,
        headers: {
          "Content-Type": contentType,
        },
      })
      .then((response) => {
        onComplete(response);
      })
      .catch((err) => {
        console.error(err.response);
      });
  }