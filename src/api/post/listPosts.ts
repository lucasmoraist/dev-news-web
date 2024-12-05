import { Pagination } from "@/interface/listPosts";
import { api } from "../api";

export async function listPosts(
  page?: number,
  size?: number
): Promise<Pagination> {
  try {
    const response = await api.get<Pagination>(
      `/post/v1?page=${page}&size=${size}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    return {
      content: [],
      pageable: {
        sort: {
          sorted: false,
          unsorted: false,
          empty: false,
        },
        pageNumber: 0,
        pageSize: 0,
        offset: 0,
        unpaged: false,
        paged: false,
      },
    };
  } finally {
    console.log("Request finished");
  }
}
