import { getUser } from "@/api/user/getUser";
import { IUserResponse } from "@/interface/getUser.interface";
import { useEffect, useState } from "react";
import style from "./profile.module.scss";
import { useImage } from "@/hooks/useImage";

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
    <div>
      <div className={style.banner}></div>
      <div>
        <h2>{user?.name}</h2>
      </div>

      <div>
        <label htmlFor="">
          <span>Email: </span>
          <input
            type="email"
            value={user?.email}
            disabled={inputActive ? true : false}
          />
        </label>
        <label htmlFor="">
          <span>Senha: </span>
          <input
            type="password"
            value={user?.password}
            disabled={inputActive ? true : false}
          />
        </label>
      </div>

      <div>
        <h3>Minhas postagens</h3>
        {user?.posts.map((p) => {
          const image = useImage(p.imageBanner);
          return (
            <div key={p.id}>
              <img src={image} alt="" />
              <h4>{p.title}</h4>
              <p>{p.updatedAt}</p>
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash"></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
