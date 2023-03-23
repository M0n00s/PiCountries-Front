import React from "react";

export const SelectedCountries = ({ country, setInput, input }) => {
	const { countries } = input;
	const handleDeleteSelected = () => {
		setInput({
			...input,
			countries: countries.filter((id) => id !== country),
		});
	};

	return (
		<p style={{ marging: "20px" }} onClick={handleDeleteSelected}>
			{country}
		</p>
	);
};
