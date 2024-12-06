import { Link } from "react-router-dom";
import style from './back-button.module.scss';

export function BackButton() {
  return (
    <div className={style.voltar}>
      <Link to={"/"}>Voltar</Link>
    </div>
  );
}
