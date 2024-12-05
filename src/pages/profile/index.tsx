import { getUser } from "@/api/user/getUser";
import { IUserResponse } from "@/interface/getUser.interface";
import { useEffect, useState } from "react";

export function Profile() {
  const [user, setUser] = useState<IUserResponse>();

  useEffect(() => {
    async function fetchData() {
      const response = await getUser();
      setUser(response);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.password}</p>
    </div>
  );
}
