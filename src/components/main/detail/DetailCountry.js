import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
	getDetailCountry,
	getDetailReset,
} from "../../../redux/reducers/actions/action";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { DataTabla } from "./DataTabla";

import "../../../css/detail.css";

export const DetailCountry = () => {
	const dispatch = useDispatch();
	const { detail } = useSelector((state) => state.data);
	let { id } = useParams();

	useEffect(() => {
		dispatch(getDetailCountry(id));
		return () => {
			dispatch(getDetailReset());
		};
	}, [dispatch, id]);

	///------go back
	const history = useHistory();
	const handleBack = () => {
		history.goBack();
	};

	return (
		<div className="detail__container">
			<div className="goBack">
				<button className="button" onClick={handleBack}>
					<BsFillCaretLeftFill /> Atras
				</button>
			</div>
			<div className="detail__img">
				<img src={detail.img} alt={detail.id} />
			</div>
			<div className="detail__data">
				<DataTabla />
				{detail.activities?.length !== 0 ? (
					<div className="detail__activity">
						<h2>Activities</h2>
						<div className="detail__activityContainer">
							{detail.activities?.map((act) => (
								<div
									className="detail__activitiesBox"
									key={act.id}
								>
									<p>
										<span>Name:</span> {act.name}
									</p>
									<p>
										<span>Season:</span> {act.season}
									</p>
									<p>
										<span>Duration:</span> {act.duration}
									</p>
									<p>
										<span>Dificulty:</span> {act.dificulty}
									</p>
								</div>
							))}
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};
