export interface IListPosts {
  id: number;
  title: string;
  content: string;
  imageBanner: string;
  author: string;
  updatedAt: string;
}

export interface Pagination {
  content: IListPosts[];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    pageNumber: number;
    pageSize: number;
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
}
