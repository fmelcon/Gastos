import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import Error from "./Error";

const Home = ({ setBudget, setRemaining, setShowHome }) => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const setBudgets = (e) => {
    setCount(parseInt(e.target.value, 10));
  };

  const addBudget = (e) => {
    e.preventDefault();

    if (count < 1 || count === "" || isNaN(count)) {
      setError(true);
      return;
    }
    setError(false);

    setBudget(count);
    setRemaining(count);
    setShowHome(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error message="El Presupuesto es Incorrecto" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu Presupuesto"
          onChange={setBudgets}
        />
        <input
          type="submit"
          className="u-full-width primary"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

Home.propTypes = {
  setBudget: PropTypes.func,
  setRemaining: PropTypes.func,
  setShowHome: PropTypes.func,
};

export default Home;
