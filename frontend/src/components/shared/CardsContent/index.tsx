import React from "react";
import { Cards } from "./Cards";
import { Sidebar } from "./Sidebar";

export const CardsContent: React.FC = () => {
  return (
    <div className="cards-content">
      <Cards />
      <Sidebar />
    </div>
  );
};
