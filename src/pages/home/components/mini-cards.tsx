import { Link } from "react-router-dom";
import style from "../style/mini-cards.module.scss";
import { IListPosts } from "@/interface/listPosts";
import { useEffect, useState } from "react";
import { getImage } from "@/api/image/getImage";

interface Props {
  post: IListPosts;
}

export function MiniCards({ post }: Props) {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      const res = await getImage(post.imageBanner);
      setImage(res);
    }

    fetchData();
  }, []);

  return (
    <article className={style.cardPequeno}>
      <img src={image} alt="Post preview image 2" aria-hidden="true" />
      <div className={style.conteudo}>
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>

        <div>
          {/* <span className={style.dataPostagem}>May 20th 2020</span> */}
          <span className={style.dataPostagem}>{post.updatedAt}</span>
          <Link
            to="/post"
            className={style.verMais}
            aria-label="Ler mais"
            title="Leia mais sobre o post"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}
