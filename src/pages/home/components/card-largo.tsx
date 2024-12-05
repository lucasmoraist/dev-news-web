import { Link } from "react-router-dom";
import style from "../style/card-largo.module.scss";
import { IListPosts } from "@/interface/listPosts.interface";
import { useImage } from "@/hooks/useImage";

interface Props {
  post: IListPosts;
}

export function CardLargo({ post }: Props) {
  const image = useImage(post.imageBanner);

  return (
    <section className={style.cardLargoWrapper}>
      <article className={style.cardLargo}>
        <div className={style.conteudo}>
          <div>
            <h3>{post.title}</h3>
            <p>
              {post.content}
            </p>
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
        {/* <img src="img/image 1.png" alt="Post cover image" aria-hidden="true" /> */}
        <img src={image} alt="Post cover image" aria-hidden="true" />
      </article>
    </section>
  );
}
