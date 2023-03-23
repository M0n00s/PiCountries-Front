import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/navbar.css";
import {
  filterByActivities,
  filterByContinent,
  getActivitiesName,
  orderByName,
  OrderByPopulation,
} from "../../redux/reducers/actions/action";

// import { } from "react-icons/bs";

export const Filters = () => {
  const dispatch = useDispatch();
  //handle activities select
  useEffect(() => {
    dispatch(getActivitiesName());
  }, [dispatch]);
  const acti = useSelector((state) => state.data.activities);
  // handle filters and order
  const handleOrderByName = ({ target }) => {
    dispatch(orderByName(target.value));
  };
  const handleOrderByPopulation = ({ target }) => {
    dispatch(OrderByPopulation(target.value));
  };
  const handleFilterContinent = ({ target }) => {
    dispatch(filterByContinent(target.value));
  };
  const handleFilterActivities = ({ target }) => {
    dispatch(filterByActivities(target.value));
  };

  return (
    <div className="filter_container">
      <div className="navbar__filterContainer">
        <h4>Ordenamiento</h4>
        <label htmlFor="alfa">Alfabeticamente</label>
        <select name="alfa" onChange={handleOrderByName}>
          <option value="">Selecciona</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
        {/* a */}
        <label htmlFor="popu">Population</label>
        <select name="popu" onChange={handleOrderByPopulation}>
          <option value="">Selecciona</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
      </div>
      {/* FILTRADO*/}
      <div className="navbar__filterContainer">
        <h4>Filtrado</h4>
        <label htmlFor="order">Continente</label>
        <select name="order" onChange={handleFilterContinent}>
          <option value="all">Selecciona</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
        </select>
        {/* a */}
        <label htmlFor="activ">Actividad</label>
        <select name="activ" onChange={handleFilterActivities}>
          <option value="">Selecciona</option>
          {acti?.map((activ) => (
            <option key={activ.id} value={activ.id}>
              {activ.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
