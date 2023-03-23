import React from "react";
import "../../css/login.css";

export const LoginScreen = ({ history }) => {
	const handleLogin = () => {
		history.push("/client");
	};
	return (
		<div className="Login__bg">
			<button className="Login__button" onClick={handleLogin}>
				Entrar
			</button>
		</div>
	);
};
