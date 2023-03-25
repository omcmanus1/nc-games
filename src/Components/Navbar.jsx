import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../contexts/Users";
import { fetchUsers } from "../api";

export default function NavBar() {
  const [loggedInUser] = useContext(UserContext);
  const [userDetails, setuserDetails] = useState({});

  useEffect(() => {
    fetchUsers().then((userArray) => {
      const matchedUser = [...userArray].filter((user) => {
        return loggedInUser.username === user.username;
      })[0];
      if (matchedUser) setuserDetails(matchedUser);
    });
  }, [loggedInUser]);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">
          NC GAMES
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/reviews" className="nav-link">
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-link">
              Categories
            </Link>
          </li>
          {Object.keys(userDetails).length ? (
            <>
              <li className="nav-item">
                <Link to="/log-in" className="nav-link">
                  Switch User
                </Link>
              </li>
              <li className="nav-item">
                <img
                  src={userDetails.avatar_url}
                  alt={userDetails.username}
                  className="user-icon"
                />
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/log-in" className="nav-link">
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <p className="nav-link">(Guest)</p>
              </li>
            </>
          )}
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}
