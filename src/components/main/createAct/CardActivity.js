import React from "react";

export const CardActivity = ({ country, setInput, input }) => {
	const { countries } = input;
	const handleAddCountry = () => {
		if (!countries.includes(country.id)) {
			setInput({ ...input, countries: [...countries, country.id] });
		}
	};

	return (
		<div onClick={handleAddCountry} className="card__activityCountry">
			<img
				src={country.img}
				style={{ width: "60px" }}
				alt={country.name}
			/>
			<p key={country.id}>{country.name}</p>
		</div>
	);
};
