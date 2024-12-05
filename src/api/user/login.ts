import { api } from "../api";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  email: string;
}

export async function login({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> {
  const response = await api
    .post<LoginResponse>("/user/v1/signin", {
      email,
      password,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response.data.message);
    })
    .finally(() => {
      console.log("Request finished.");
    });

  return response;
}
