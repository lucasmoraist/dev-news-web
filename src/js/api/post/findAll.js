import { apiUrl } from "../api.js";

export async function findAll() {
  try {
    const response = await fetch(`${apiUrl}/post/v1`);
    if (!response.ok) {
      throw new Error("Erro ao recuperar os posts");
    }

    const posts = await response.json();
    console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
  }
}
