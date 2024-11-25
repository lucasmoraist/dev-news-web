import { apiUrl } from "../api.js";

export async function findById(id) {
  try {
    const response = await fetch(`${apiUrl}/post/v1/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao recuperar o post");
    }

    const post = await response.json();
    return post;
  } catch (error) {
    console.error(error);
  }
}
