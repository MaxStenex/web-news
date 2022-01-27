import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Loader } from "..";
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

  const username = data?.data.username;

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
    content = (
      <>
        <span onClick={() => setIsPopupOpened(true)} className="header__username">
          {username}
        </span>
        {isPopupOpened && (
          <div ref={popupRef} className="header-popup">
            <button className="primary-btn header-popup__btn">Logout</button>
          </div>
        )}
      </>
    );
  }

  return <div className="header__auth">{content}</div>;
};
