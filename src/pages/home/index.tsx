import { BigCard } from "./big-card";
import { CardLargo } from "./card-largo";
import { MiniCards } from "./mini-cards";

export function Home() {
  return (
    <main>
      <CardLargo />

      <MiniCards />

      <BigCard />
    </main>
  );
}
