import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../contexts/Users";

import { fetchUsers } from "../api";

export default function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then((userArray) => {
      setUsers(userArray);
      setIsLoading(false);
    });
  }, []);

  const logIn = (e) => {
    setLoggedInUser({ username: e.target.value });
  };

  const renderUserCard = () => {
    return users.map((user, index) => {
      return (
        <li className="user-card" key={index}>
          <img
            className="profile-pic"
            src={user.avatar_url}
            alt={user.username}
          />
          <h2>{user.username}</h2>
          <h3>({user.name})</h3>
          <Link>
            <button
              className="login-button"
              value={user.username}
              onClick={logIn}
            >
              Log In
            </button>
          </Link>
        </li>
      );
    });
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <h1 className="page-header">USERS</h1>
      <ul className="users-list">{renderUserCard()}</ul>
    </>
  );
}
