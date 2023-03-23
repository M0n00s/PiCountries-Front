import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import { CreateActivity } from "../components/main/createAct/CreateActivity";
import { DashboardScreen } from "../components/main/dashboard/DashboardScreen";
import { DetailCountry } from "../components/main/detail/DetailCountry";
import { AiFillCaretDown } from "react-icons/ai";

import "../css/dashboard.css";
import { NavBar } from "../components/aside/NavBar";
import { Filters } from "../components/aside/Filters";

export const DashboardRouter = () => {
  const history = useHistory();
  const viewFilters = history.location.pathname;

  return (
    <div className="dashboard__container">
      <aside className="dashboard__aside">
        <div className="dashboard__title">
          <h2>
            <span>COUNTRIES</span>APP
          </h2>
          <p>Created by Abdel Arocha</p>
          <span className="flecha">
            <AiFillCaretDown />
          </span>
        </div>
        <div className="dashboard__responsive">
          <NavBar />
          {viewFilters === "/client/dashboard" && <Filters />}
        </div>
      </aside>
      <main className="dashboard__main">
        <Switch>
          <Route path="/client/dashboard" component={DashboardScreen} />
          <Route path="/client/create" component={CreateActivity} />
          <Route path="/client/detail/:id" component={DetailCountry} />
          <Redirect to="/client/dashboard" />
        </Switch>
      </main>
    </div>
  );
};
