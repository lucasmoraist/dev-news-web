import { useEffect, useState } from 'react';
import { BigCard } from './components/big-card';
import { CardLargo } from './components/card-largo';
import { MiniCards } from './components/mini-cards';
import { listPosts } from '@/api/post/listPosts';
import { IListPosts } from '@/interface/listPosts.interface';
import styleMini from './style/mini-cards.module.scss';
import styleBig from './style/big-card.module.scss';

export function Home() {
  const [posts, setPosts] = useState<IListPosts[]>([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    async function fetchData() {
      const res = await listPosts(page, size);
      setPosts(res.content);
    }

    fetchData();
  }, [page, size]);

  const seeMore = () => {
    let moreSize = size + 5;
    setSize(moreSize);
  };

  return (
    <>
      {posts.slice(0, 1).map((p) => (
        <CardLargo post={p} key={p.id} />
      ))}

      <div className={styleMini.cardPequenoWrapper}>
        {posts.slice(1, 4).map((p) => (
          <MiniCards post={p} key={p.id} />
        ))}
      </div>

      {posts.slice(4).map((p) => (
        <BigCard post={p} key={p.id} onClick={seeMore} size={size}>
          {size >= 10 ? (
            <></>
          ) : (
            <button
              className={styleBig.verMaisPostagens}
              aria-label="Ver mais postagens do blog"
              role="button"
              onClick={seeMore}
            >
              Ver mais
              <i
                className="bi bi-arrow-down-circle-fill"
                aria-hidden="true"
              ></i>
            </button>
          )}
        </BigCard>
      ))}
    </>
  );
}
