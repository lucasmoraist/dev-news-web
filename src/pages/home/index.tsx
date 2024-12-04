import { BigCard } from "./components/big-card";
import { CardLargo } from "./components/card-largo";
import { MiniCards } from "./components/mini-cards";

export function Home() {
  return (
    <>
      <CardLargo />

      <MiniCards />

      <BigCard />
    </>
  );
}
