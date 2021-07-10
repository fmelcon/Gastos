import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { checkBudget } from "../helper/helper";

const Total = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {budget}</div>
      <div className={checkBudget(budget, remaining)}>
        Restante: $ {remaining}
      </div>
    </Fragment>
  );
};

Total.propTypes = {
  budget: PropTypes.any,
  remaining: PropTypes.any,
};

export default Total;
