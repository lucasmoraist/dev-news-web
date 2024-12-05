import { api } from "../api";

export async function getImage(filename: string) {
  try {
    const response = await api
      .get(`/image/v1/${filename}`, {
        responseType: "blob",
      })
    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;
  } catch (error) {
    console.error(error);
  }
}
