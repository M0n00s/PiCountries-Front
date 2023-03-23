import React from "react";
import { useHistory } from "react-router-dom";
import { Filters } from "./Filters";
import { NavBar } from "./NavBar";

export const Aside = () => {
  const history = useHistory();
  const viewFilters = history.location.pathname;
  return (
    <div className="dashboard__responsive">
      <NavBar />
      {viewFilters === "/client/dashboard" && <Filters />}
    </div>
  );
};
