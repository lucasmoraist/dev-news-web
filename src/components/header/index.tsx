import { useLocation } from "react-router-dom";
import style from "./header.module.scss";

export default function Header() {
  const location = useLocation();
  return (
    <header className={style.cabecalho}>
      <nav className={style.navegacao}>
        <h2 className={style.logo}>DevNews</h2>

        <div className={style.campoBusca}>
          <i className="bi bi-search" aria-hidden="true"></i>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className={style.inputSearch}
            aria-label="Campo de busca"
          />
        </div>

        <div className={style.menuContainer}>
          <div className={style.loginAcesso}>
            <a aria-label="Criar conta" href="src/pages/signup.html">
              Sign-Up
            </a>
            <a aria-label="Login" href="src/pages/signin.html">
              Sign-In
            </a>
          </div>

          <menu className={style.menu}>
            <li>
              <a aria-label="Página Inicial" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a aria-label="Escrever" href="#">
                <i className="bi bi-pencil-square" aria-hidden="true"></i>
                Write
              </a>
            </li>
            <li>
              <a aria-label="Perfil" href="#">
                <i className="bi bi-person-circle" aria-hidden="true"></i>
              </a>
            </li>
          </menu>
        </div>
      </nav>

      {location.pathname === "/" && (
        <div className={style.homeCapa}>
          <div className={style.title}>
            <h1>
              Your daily dose <br />
              of inspiration
            </h1>
            <img
              src="img/image 6.png"
              alt="A cup of coffee"
              aria-hidden="true"
            />
          </div>
          <img
            src="img/croods 1.png"
            alt="An inspirational illustration"
            aria-hidden="true"
          />
        </div>
      )}
    </header>
  );
}
