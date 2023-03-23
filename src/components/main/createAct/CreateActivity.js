import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../css/activity.css";
import {
  getDataPrincipal,
  postActivity,
} from "../../../redux/reducers/actions/action";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { CardActivity } from "./CardActivity";
import { SelectedCountries } from "./SelectedCountries";
import { useHistory } from "react-router-dom";

export const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.data.countries);
  const [error, setError] = useState(false);
  const [pag2, setPag2] = useState(0);
  const history = useHistory();
  let [num, setNum] = useState(0);
  let [time, setTime] = useState("min");
  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  // handle countries filtred
  useEffect(() => {
    dispatch(getDataPrincipal());
  }, [dispatch]);
  useEffect(() => {
    setInput({
      ...input,
      duration: `${num} ${time}`,
    });
  }, [num, time]);
  // form
  const { name } = input;
  const handleInput = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion vacio
    if (
      input.name.trim() === "" ||
      input.dificulty.trim() === "" ||
      input.duration.trim() === "" ||
      input.season.trim() === "" ||
      input.countries.length === 0
    ) {
      setError(true);
      return;
    }
    setError(false);
    // dispatch post
    dispatch(postActivity(input));

    //reset values
    setInput({
      name: "",
      dificulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    alert("Actividad Creada con exito");
    //devolver a dashboard
    history.push("/client/dashboard");
  };

  //----------pagination
  const pagcountries = () => {
    return countries.slice(pag2, pag2 + 10);
  };
  const handleNext = () => {
    if (countries.length > pag2 + 10) setPag2(pag2 + 10);
  };
  const handlePrev = () => {
    if (pag2 > 0) setPag2(pag2 - 10);
  };

  //----- hanlde input duration
  // const handleDuration = () => {
  // 	setInput({
  // 		...input,
  // 		duration: `${num} ${time}`,
  // 	});
  // };
  // console.log(input);
  return (
    <div className="activity__container">
      <div className="form__container">
        {error ? (
          <p className="ActivityError">Todos los campos son obligatorios</p>
        ) : null}
        <form onSubmit={handleSubmit}>
          <span>Nombre de Actividad</span>
          <input type="text" name="name" value={name} onChange={handleInput} />
          <span>Dificultad</span>
          <select name="dificulty" onChange={handleInput}>
            <option value="">Selecciona</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <span>Duracion</span>
          <div>
            <input
              onChange={(e) => setNum(e.target.value)}
              name="duracion"
              type="number"
              // onChange={handleInput}
            />
            <select name="tiempo" onChange={(e) => setTime(e.target.value)}>
              <option value="min">min</option>
              <option value="horas">Horas</option>

              <option value="dias">dias</option>
              <option value="anos">años</option>
            </select>
          </div>

          <span>Temporada</span>
          <select name="season" onChange={handleInput}>
            <option value="">Selecciona</option>
            <option value="verano">Verano</option>
            <option value="otoño">Otoño</option>
            <option value="invierno">Invierno</option>
            <option value="primavera">Primavera</option>
          </select>
          <div className="selected__countries">
            {input.countries?.map((country) => (
              <SelectedCountries
                key={country}
                country={country}
                setInput={setInput}
                input={input}
              />
            ))}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="activity__countriesSelector">
        <hr />
        <div>
          <button className="button" onClick={handlePrev}>
            <BsFillCaretLeftFill />
          </button>
          <button className="button" onClick={handleNext}>
            <BsFillCaretRightFill />
          </button>
        </div>
        <div className="search__countries">
          <div className="pagCountries">
            {pagcountries().map((country) => (
              <CardActivity
                key={country.id}
                country={country}
                setInput={setInput}
                input={input}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
