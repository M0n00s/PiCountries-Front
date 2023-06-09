import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { CreateActivity } from "../components/main/createAct/CreateActivity";
import { DashboardScreen } from "../components/main/dashboard/DashboardScreen";
import { DetailCountry } from "../components/main/detail/DetailCountry";
import { AiFillCaretDown } from "react-icons/ai";

import "../css/dashboard.css";
import { Aside } from "../components/aside/Aside";

export const DashboardRouter = () => {
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
        <Aside />
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
