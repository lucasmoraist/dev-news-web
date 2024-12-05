import { IUserResponse } from "@/interface/getUser.interface";
import { api } from "../api";

export async function getUser(): Promise<IUserResponse> {
  const token = localStorage.getItem("token");

  const response = await api
    .get<IUserResponse>("/user/v2", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });

  return response;
}
