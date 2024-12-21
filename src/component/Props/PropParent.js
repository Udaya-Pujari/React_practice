import React from "react";
import PropChild from "./PropChild";

const PropParent = () => {
  // Props are used transfer the data from one component to another component
  return (
    <div>
      <PropChild name="Udaya" age="89" city="Germany" />
    </div>
  );
};

export default PropParent;
