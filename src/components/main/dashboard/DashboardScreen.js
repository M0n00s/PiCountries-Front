import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getDataPrincipal,
	getCountryByName,
} from "../../../redux/reducers/actions/action";
import "../../../css/dashboardScreen.css";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Cards } from "./Cards";

export const DashboardScreen = () => {
	const dispatch = useDispatch();
	const { countries } = useSelector((state) => state.data);
	const [pag, setPag] = useState(0);
	const [search, setSearch] = useState("");

	useEffect(() => {
		dispatch(getDataPrincipal());
	}, [dispatch]);
	//----- data filter
	const filteredCountries = () => {
		return countries.slice(pag, pag + 10);
	};

	//----------pagination
	const handleNext = () => {
		if (countries.length > pag + 10) setPag(pag + 10);
	};
	const handlePrev = () => {
		if (pag > 0) setPag(pag - 10);
	};
	//-----------------input handler
	const handleSearch = ({ target }) => {
		setSearch(target.value);
	};
	//----------search handler
	const regex = /[a-zA-Z]/g;
	const handlerSubmit = (e) => {
		e.preventDefault();
		regex.test(search)
			? dispatch(getCountryByName(search))
			: alert(
					"Nombre de pais no puede tener simbolos, caracteres o numeros."
			  );

		setPag(0);
		setSearch("");
	};
	return (
		<div className="dashBoardScreen__container">
			<div className="dashBoardScreen__submenu">
				<div>
					<button className="button" onClick={handlePrev}>
						<BsFillCaretLeftFill />
					</button>
					<button className="button" onClick={handleNext}>
						<BsFillCaretRightFill />
					</button>
				</div>
				<div>
					<form onSubmit={handlerSubmit}>
						<input
							className="input"
							type="text"
							placeholder="Search Country"
							name="search"
							value={search}
							onChange={handleSearch}
						/>
						{/* <button className="button" type="submit">
							Buscar
						</button> */}
					</form>
				</div>
			</div>
			<div className="cards__container ">
				{countries.length !== 0
					? filteredCountries().map((country) => (
							<Cards key={country.id} country={country} />
					  ))
					: "no hay resultados en su busqueda"}
			</div>
		</div>
	);
};
