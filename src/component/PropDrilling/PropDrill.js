//PropDrilling: passing the props through multiple layers of nested componets
/**
 * this happens when we want to pass the piece of data from heigher component to teh deeply nested child componet
    through intermediatory componets
 */

import React from "react";

const PropDrill = () => {
  const data = "Data from the grandpatent level";
  return <Parent data={data} />;
};

const Parent = ({ data }) => {
  return <Child data={data} />;
};

const Child = ({ data }) => {
  return <h1>This data is from======: {data}</h1>;
};

export default PropDrill;
