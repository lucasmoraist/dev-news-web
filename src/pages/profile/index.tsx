import { getUser } from "@/api/user/getUser";
import { IUserResponse } from "@/interface/getUser.interface";
import { useEffect, useState } from "react";
import style from "./profile.module.scss";
import { PostsProfile } from "./components/posts";
import { Button } from "@/components/button";

export function Profile() {
  const [user, setUser] = useState<IUserResponse>();
  const [inputActive, setInputActive] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await getUser();
      setUser(response);
    }

    fetchData();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.banner}>
        <div className={style.circle}></div>
      </div>

      <div className={style.container}>
        <div className={style.about}>
          <h2>{user?.name}</h2>
          <button onClick={() => setInputActive(false)}>
            <i className="bi bi-pencil-fill"></i>
          </button>
        </div>

        <div className={style.security}>
          <label>
            <span>Email: </span>
            <input
              type="email"
              value={user?.email}
              disabled={inputActive ? true : false}
            />
          </label>
          <label>
            <span>Senha: </span>
            <input
              type="password"
              value={user?.password}
              disabled={inputActive ? true : false}
            />
          </label>

          {!inputActive && (
            <div className={style.buttons}>
              <Button button="secondary" onClick={() => setInputActive(true)}>Cancelar</Button>
              <Button button="primary">Salvar</Button>
            </div>
          )}
        </div>

        <div className={style.posts}>
          <h3>Minhas postagens</h3>
          {user?.posts.map((p) => (
            <PostsProfile key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
