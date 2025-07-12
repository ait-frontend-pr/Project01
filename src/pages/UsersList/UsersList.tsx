import { useEffect, useState } from "react";
import type { User } from "../../types";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  });

  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const usersRes = await res.json();
    setUsers(usersRes);
  }

  return (
    <div style={{ padding: "16px" }}>
      <h2>Users List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((u) => (
          <li key={"user" + u.id} style={{ marginBottom: "24px" }}>
            <img src={u.avatar} alt="user" width="120" />
            <h3>{u.name}</h3>
            <h4>{u.role}</h4>
            <Link to={`/users/${u.id}`}> User details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
