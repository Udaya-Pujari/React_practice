import React, { memo } from "react";

const Child = ({ childTrigger }) => {
  console.log("chlild is rendering...!");
  return <div></div>;
};

export default memo(Child);
