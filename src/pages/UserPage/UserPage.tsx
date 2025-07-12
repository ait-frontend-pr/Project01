import { useEffect, useState } from "react";
import type { User } from "../../types";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);

  async function fetchUser(id: string | undefined) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const obj = await res.json();
    setUser(obj);
  }

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  return (
    <div style={{ listStyle: "none", padding: "16px" }}>
      <h2>{user?.name}</h2>
      <img src={user?.avatar} alt="user" width="120" />
      <h3>Email: {user?.email}</h3>
      <h4>Role: {user?.role}</h4>
      <h4>Creation at: {user?.creationAt}</h4>
      <h4>Updated at: {user?.updatedAt}</h4>
    </div>
  );
}
