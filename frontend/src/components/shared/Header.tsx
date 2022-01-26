import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Loader } from ".";
import { useMeQuery } from "../../queries/auth";

interface INavLink {
  text: string;
  path: string;
}

const headerLinks: Array<INavLink> = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "News",
    path: "/",
  },
];

export const Header: React.FC = () => {
  const { data, isLoading } = useMeQuery();

  const username = data?.data.username;

  let authSectionContent = (
    <>
      <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
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
  );

  if (isLoading) {
    authSectionContent = <Loader className="header__loader" />;
  }

  if (username) {
    authSectionContent = <span>{username}</span>;
  }

  return (
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
        <div className="header__auth">{authSectionContent}</div>
      </div>
    </header>
  );
};
