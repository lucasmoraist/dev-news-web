import { api } from "../api";

interface CreateUserRequest {
  name: string;
  password: string;
  email: string;
}

export async function createUser({ name, email, password }: CreateUserRequest) {
  const response = await api
    .post("/user/v1/signup", {
      name,
      email,
      password,
    })
    .then((res) => res.status);

  return response;
}
