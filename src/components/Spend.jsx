import PropTypes from "prop-types";
import React from "react";

const Spend = ({ spend }) => {
  return (
    <li className="gastos">
      <p>
        {spend.name}
        <span className="gasto">$ {spend.count}</span>
      </p>
    </li>
  );
};

Spend.propTypes = {
  spend: PropTypes.shape({
    count: PropTypes.any,
    name: PropTypes.any,
  }),
};

export default Spend;
