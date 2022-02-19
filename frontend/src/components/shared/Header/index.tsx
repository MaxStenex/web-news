import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuthContent } from "./UserAuthContent";

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
    path: "/news?page=1",
  },
];

export const Header: React.FC = () => {
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
        <UserAuthContent />
      </div>
    </header>
  );
};
