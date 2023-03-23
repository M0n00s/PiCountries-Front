import React from "react";
import { useSelector } from "react-redux";

export const DataTabla = (detail) => {
	const data = useSelector((state) => state.data.detail);

	const formatNum = (num) => {
		return new Intl.NumberFormat().format(num);
	};

	return (
		<table>
			<tbody>
				<tr>
					<td>
						<span>Name: </span>
					</td>
					<td>{data.name}</td>
				</tr>
				<tr>
					<td>
						<span>Cca3: </span>
					</td>
					<td>{data.id}</td>
				</tr>
				<tr>
					<td>
						<span>Continent: </span>
					</td>
					<td>{data.continent}</td>
				</tr>
				<tr>
					<td>
						<span>SubContinent: </span>
					</td>
					<td>{data.subcontinent}</td>
				</tr>
				<tr>
					<td>
						<span>Capital: </span>
					</td>
					<td>{data.capital}</td>
				</tr>
				<tr>
					<td>
						<span>Area: </span>
					</td>
					<td>{formatNum(data.area)} km^2</td>
				</tr>
				<tr>
					<td>
						<span>Population: </span>
					</td>
					<td>{formatNum(data.population)} people</td>
				</tr>

				<tr>
					<td>
						<span>
							<a
								href={data.maps}
								target="_blank"
								rel="noreferrer"
							>
								Google Maps
							</a>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	);
};
