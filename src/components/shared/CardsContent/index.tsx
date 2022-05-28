import React from "react";
import { Sidebar } from "./Sidebar";

export const CardsContent: React.FC = ({ children }) => {
  return (
    <div className="cards-content">
      <div className="cards-content__cards">{children}</div>
      <Sidebar />
    </div>
  );
};
