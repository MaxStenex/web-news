import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Loader } from "..";
import { queryClient } from "../../../App";
import { useOnOtsideClick } from "../../../hooks";
import { useMeQuery } from "../../../queries/auth";

export const UserAuthContent: React.FC = () => {
  const { data, isLoading } = useMeQuery();

  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const popupRef = useOnOtsideClick<HTMLDivElement>(() => {
    if (isPopupOpened) {
      setIsPopupOpened(false);
    }
  });

  const username = data?.username;

  let content = (
    <>
      <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
        Login
      </NavLink>
      <span>/</span>
      <NavLink
        to="/registration"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Register
      </NavLink>
    </>
  );

  if (isLoading) {
    content = <Loader className="header__loader" />;
  }

  if (username) {
    const onLogoutClick = () => {
      localStorage.removeItem("token");
      queryClient.invalidateQueries("me");
    };

    content = (
      <>
        <span onClick={() => setIsPopupOpened(true)} className="header__username">
          {username}
        </span>
        {isPopupOpened && (
          <div ref={popupRef} className="header-popup">
            <Link to="/create-post">
              <button className="primary-btn header-popup__btn">Create post</button>
            </Link>
            <button onClick={onLogoutClick} className="primary-btn header-popup__btn">
              Logout
            </button>
          </div>
        )}
      </>
    );
  }

  return <div className="header__auth">{content}</div>;
};
