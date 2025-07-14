import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";

export const UsersList = () => {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: "16px" }}>
      <h2>Users List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((u) => (
          <li key={u.id} style={{ marginBottom: "24px" }}>
            <img
              src={u.avatar}
              alt="user"
              width="120"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg";
              }}
            />
            <h3>{u.name}</h3>
            <h4>{u.role}</h4>
            <Link to={`/users/${u.id}`}> User details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
