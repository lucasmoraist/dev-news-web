import { Link } from "react-router-dom";
import style from "../style/card-largo.module.scss";

export function CardLargo() {
  return (
    <section className={style.cardLargoWrapper}>
      <article className={style.cardLargo}>
        <div className={style.conteudo}>
          <div>
            <h3>long established</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
          </div>

          <div>
            <span className={style.dataPostagem}>May 20th 2020</span>
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
        <img src="img/image 1.png" alt="Post cover image" aria-hidden="true" />
      </article>
    </section>
  );
}
