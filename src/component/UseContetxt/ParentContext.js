import React, { createContext } from "react";
import { ChildA } from "./ChildA";

const data = createContext();
const data1 = createContext();
const ParentContext = () => {
  const name = "usp";
  const gender = "male";
  return (
    <data.Provider value={name}>
      <data1.Provider value={gender}>
        <ChildA />
      </data1.Provider>
    </data.Provider>
  );
};

export default ParentContext;
export { data, data1 };
