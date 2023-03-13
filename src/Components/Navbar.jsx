import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">
          NM
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/items" className="nav-link">
              All Items
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-link">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/list-item" className="nav-link">
              List Item
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/basket" className="nav-link">
              Basket
            </Link>
          </li>
        </ul>
        <div className="hamburger-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}