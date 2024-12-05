import { Link } from "react-router-dom";
import style from "../style/mini-cards.module.scss";

export function MiniCards() {
  return (
    <section className={style.cardPequenoWrapper}>
      <article className={style.cardPequeno}>
        <img
          src="img/image 2.png"
          alt="Post preview image 2"
          aria-hidden="true"
        />
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
      </article>

      <article className={style.cardPequeno}>
        <img
          src="img/image 4.png"
          alt="Post preview image 2"
          aria-hidden="true"
        />
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
      </article>

      <article className={style.cardPequeno}>
        <img
          src="img/image 5.png"
          alt="Post preview image 2"
          aria-hidden="true"
        />
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
      </article>
    </section>
  );
}
