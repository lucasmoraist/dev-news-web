import { Link } from "react-router-dom";
import style from "../style/big-card.module.scss";

export function BigCard() {
  return (
    <section className={style.bigCardWrapper}>
      <div className={style.cardBigContainer}>
        <article className={style.cardBig}>
          <div className={style.conteudo}>
            <div>
              <h3>What is Lorem Ipsum?</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution...
              </p>
            </div>

            <div>
              <span className={style.dataPostagem}>May 20</span>
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
          <img
            src="img/image 7.png"
            alt="Big post cover image"
            aria-hidden="true"
          />
        </article>
        <button
          className={style.verMaisPostagens}
          aria-label="Ver mais postagens do blog"
          role="button"
        >
          Ver mais
          <i className="bi bi-arrow-down-circle-fill" aria-hidden="true"></i>
        </button>
      </div>
    </section>
  );
}
