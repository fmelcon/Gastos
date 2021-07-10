import PropTypes from "prop-types";
import React from "react";
import Spend from "./Spend";

const List = ({ spending }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {spending.map((spend) => (
        <Spend key={spend.id} spend={spend} />
      ))}
    </div>
  );
};

List.propTypes = {
  spending: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default List;
