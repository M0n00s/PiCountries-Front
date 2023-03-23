import React from "react";
import { useHistory } from "react-router-dom";
import "../../../css/cards.css";

export const Cards = ({ country }) => {
	const history = useHistory();

	const handleDetail = () => {
		history.push(`/client/detail/${country.id}`);
	};
	return (
		<div
			onClick={handleDetail}
			className="cards__card"
			style={{ backgroundImage: `url(${country.img})` }}
		>
			<h4>{country.name}</h4>
			<p>{country.continent}</p>
		</div>
	);
};
