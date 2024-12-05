import { useEffect, useState } from "react";
import { BigCard } from "./components/big-card";
import { CardLargo } from "./components/card-largo";
import { MiniCards } from "./components/mini-cards";
import { listPosts } from "@/api/post/listPosts";
import { IListPosts } from "@/interface/listPosts";
import styleMini from "./style/mini-cards.module.scss";

export function Home() {
  const [posts, setPosts] = useState<IListPosts[]>([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const res = await listPosts(page, size);
      setPosts(res.content);
    }

    fetchData();
  }, [page, size]);

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
        <BigCard post={p} key={p.id} />
      ))}
    </>
  );
}
