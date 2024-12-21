import React from "react";

const PropChild = ({ name, age, city }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{city}</h3>
    </div>
  );
};

export default PropChild;
