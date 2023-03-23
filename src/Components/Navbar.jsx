import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../contexts/Users";

export default function NavBar() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">
          NC GAMES
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
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
          {/* <li className="nav-item">
            <Link to="/reviews/post-review" className="nav-link">
              Post A Review
            </Link>
          </li> */}
          {/* TODO: add log out functionality? */}
          {loggedInUser.username ? (
            <li className="nav-item">
              <Link to="/log-in" className="nav-link">
                <p>Switch User</p>
                <p>({loggedInUser.username})</p>
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/log-in" className="nav-link">
                Log In
              </Link>
            </li>
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
