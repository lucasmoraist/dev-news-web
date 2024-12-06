import { useImage } from "@/hooks/useImage";
import { Posts } from "@/interface/getUser.interface";
import style from "./posts-profile.module.scss";

interface Props {
  post: Posts;
}

export function PostsProfile({ post }: Props) {
  const image = useImage(post.imageBanner);
  return (
    <div className={style.container}>
      <img src={image} alt="" />
      <div className={style.wrapper}>
        <div className={style.postDetails}>
          <h4>{post.title}</h4>
          <p>{post.updatedAt}</p>
        </div>
        <div className={style.actions}>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash"></i>
        </div>
      </div>
    </div>
  );
}
