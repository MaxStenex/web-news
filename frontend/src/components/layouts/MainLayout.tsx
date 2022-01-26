import { Link, NavLink } from "react-router-dom";
import { useMeQuery } from "../../queries/auth";

type HeaderLinkType = {
  text: string;
  path: string;
};

const headerLinks: Array<HeaderLinkType> = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "News",
    path: "/",
  },
];

export const MainLayout: React.FC = ({ children }) => {
  const { data } = useMeQuery();

  const username = data?.data.username;

  return (
    <div className="main-layout">
      <div className="main-layout__wrapper">
        <header className="header">
          <div className="header__wrapper">
            <Link to="/" className="header__logo">
              WebNews
            </Link>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {headerLinks.map((l, i) => (
                  <li key={i} className="header__nav-item">
                    <NavLink
                      to={l.path}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {l.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header__auth">
              {username ? (
                <span>{username}</span>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Login
                  </NavLink>{" "}
                  /{" "}
                  <NavLink
                    to="/registration"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </header>
        <main className="main">
          <div className="main__wrapper">{children}</div>
        </main>
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
