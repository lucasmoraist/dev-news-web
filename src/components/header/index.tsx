import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./header.module.scss";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token]);

  return (
    <header className={style.cabecalho}>
      <nav className={style.navegacao}>
        <Link to={"/"}>
          <h2 className={style.logo}>DevNews</h2>
        </Link>

        {location.pathname !== "/signin" && location.pathname !== "/signup" && (
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
        )}

        <div className={style.menuContainer}>
          {!isLogged ? (
            <div className={style.loginAcesso}>
              <a aria-label="Criar conta" onClick={() => navigate("/signup")}>
                Sign-Up
              </a>
              <a aria-label="Login" onClick={() => navigate("/signin")}>
                Sign-In
              </a>
            </div>
          ) : (
            <menu className={style.menu}>
              <li>
                <Link aria-label="Página Inicial" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/new-post"}
                  aria-label="Escrever"
                  style={{ display: "flex", gap: 5 }}
                >
                  <i className="bi bi-pencil-square" aria-hidden="true"></i>
                  Write
                </Link>
              </li>
              <li>
                <Link aria-label="Perfil" to={"/profile"}>
                  <i className="bi bi-person-circle" aria-hidden="true"></i>
                </Link>
              </li>
            </menu>
          )}
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
