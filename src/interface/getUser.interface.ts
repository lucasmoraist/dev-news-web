interface Posts {
    id: number;
    title: string;
    imageBanner: string;
    updatedAt: string;
}

export interface IUserResponse {
    id: string;
    name: string;
    email: string;
    password: string;
    posts: Posts[];
}