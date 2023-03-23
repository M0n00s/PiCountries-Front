import React from "react";
import { Route, Switch } from "react-router-dom";
// component
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={LoginScreen} />
				<Route path="/client" component={DashboardRouter} />
			</Switch>
		</div>
	);
};
