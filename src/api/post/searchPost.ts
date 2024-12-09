import { IFindPosts } from '@/interface/findPosts.interface';
import { api } from '../api';

export async function searchPost(title: string): Promise<IFindPosts[]> {
  const response = await api
    .get<IFindPosts[]>(`/post/v1/find?title=${title}`)
    .then((res) => {
        console.log(res.data);
        return res.data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });

  return response;
}
