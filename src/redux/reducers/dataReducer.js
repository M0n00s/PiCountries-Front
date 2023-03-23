import {
	ACTIVITIES_NAME,
	FILTER_BY_ACTIVITY,
	FILTER_BY_CONTINENT,
	GET_ALL_DATA,
	GET_DATA_BY_NAME,
	GET_DETAIL_COUNTRY,
	GET_DETAIL_RESET,
	ORDER_BY_NAME,
	ORDER_BY_POPULATION,
} from "./types/types";

const initialState = {
	countriesFilter: [],
	countries: [],
	detail: [],
	activities: [],
};

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_DATA:
			return {
				...state,
				countries: action.payload,
				countriesFilter: action.payload,
			};

		case GET_DATA_BY_NAME:
			return {
				...state,
				countries: action.payload,
			};

		case GET_DETAIL_COUNTRY:
			return {
				...state,
				detail: action.payload,
			};

		case GET_DETAIL_RESET:
			return {
				...state,
				detail: [],
			};

		case ORDER_BY_NAME:
			let byName;
			let countries = state.countries;
			action.payload === "ASC"
				? (byName = countries.sort(
						(a, b) => a.name.localeCompare(b.name)
						// a.name > b.name ? 1 : a.name < b.name ? -1 : 0
				  ))
				: (byName = countries.sort(
						(b, a) => a.name.localeCompare(b.name)
						// a.name > b.name ? 1 : a.name < b.name ? -1 : 0
				  ));

			return {
				...state,
				countries: byName,
			};

		case ORDER_BY_POPULATION:
			let byPopu;
			let countries2 = state.countries;
			action.payload === "DESC"
				? (byPopu = countries2.sort((a, b) =>
						a.population > b.population
							? 1
							: a.population < b.population
							? -1
							: 0
				  ))
				: (byPopu = countries2.sort((b, a) =>
						a.population > b.population
							? 1
							: a.population < b.population
							? -1
							: 0
				  ));

			return {
				...state,
				countries: byPopu,
			};

		case FILTER_BY_CONTINENT:
			let filterContinent;
			const countiresAllData = state.countriesFilter;
			countiresAllData === "all"
				? (filterContinent = countiresAllData)
				: (filterContinent = countiresAllData.filter(
						(country) => country.continent === action.payload
				  ));
			return {
				...state,
				countries: filterContinent,
			};

		case ACTIVITIES_NAME:
			return {
				...state,
				activities: action.payload,
			};

		case FILTER_BY_ACTIVITY:
			const countiresAllData2 = state.countriesFilter;

			const filterAct = countiresAllData2.reduce((acumulador, actual) => {
				let activId = actual.activities.map((el) => el.id);

				if (activId.includes(parseInt(action.payload))) {
					acumulador.push(actual);
				}
				return acumulador;
			}, []);

			return {
				...state,
				countries: filterAct,
			};
		default:
			return state;
	}
};
