import React, { createContext } from "react";
import ChildA from "./ChildA";

/**
 * create
 * provide
 * consume
 */
const data = createContext();
const Parent = () => {
  const name = "udaya Pujari";
  return (
    <data.Provider value={name}>
      <ChildA />
    </data.Provider>
  );
};

export default Parent;
export { data };
