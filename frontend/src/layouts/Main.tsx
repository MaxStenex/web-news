import { Link, NavLink } from "react-router-dom";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div id="main-layout">
      <div className="wrapper">
        <header className="header">
          <div className="header__wrapper">
            <Link to="/" className="header__logo">
              WebNews
            </Link>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Authors
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header__auth">
              <Link to="/">Login</Link> / <Link to="/">Register</Link>
            </div>
          </div>
        </header>
        <main className="main">{children}</main>
        <footer className="footer">
          <div className="footer__text">
            Web news project | Made by{" "}
            <a href="https://github.com/maxstenex" target="_blank" rel="noreferrer">
              Maxim Rozinkevich
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
