import { Link, Outlet } from 'react-router-dom';
import style from '../style/big-card.module.scss';
import { IListPosts } from '@/interface/listPosts.interface';
import { useImage } from '@/hooks/useImage';

interface Props {
  post: IListPosts;
  onClick?: () => void;
  size: number;
  children?: React.ReactNode;
}

export function BigCard({ post, children }: Props) {
  const image = useImage(post.imageBanner);

  return (
    <section className={style.bigCardWrapper}>
      <div className={style.cardBigContainer}>
        <article className={style.cardBig}>
          <div className={style.conteudo}>
            <div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>

            <div>
              {/* <span className={style.dataPostagem}>May 20</span> */}
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
          <img src={image} alt="Big post cover image" aria-hidden="true" />
        </article>
        {children}
      </div>
    </section>
  );
}
