import { api } from "../api";

interface PostData {
  title: string;
  content: string;
  file: File | undefined;
}

interface PostResponse {
  id: number;
}

export async function savePost({
  title,
  content,
  file,
}: PostData): Promise<PostResponse> {
  const token = localStorage.getItem("token");
  const response = await api
    .post<PostResponse>(
      "/post/v2",
      {
        title,
        content,
        file,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });

  return response;
}
