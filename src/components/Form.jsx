import PropTypes from "prop-types";
import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Form = ({ setSpend, setCreatespend }) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const addSpending = (e) => {
    e.preventDefault();
    if (count < 1 || isNaN(count) || name.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    const spend = {
      name,
      count,
      id: shortid.generate(),
    };
    setSpend(spend);
    setCreatespend(true);
    setName("");
    setCount(0);
  };

  return (
    <form onSubmit={addSpending}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? (
        <Error message="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre del Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad del Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Form.propTypes = {
  setCreatespend: PropTypes.func,
  setSpend: PropTypes.func,
};

export default Form;
