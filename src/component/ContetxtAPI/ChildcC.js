import React from "react";
import { data } from "./Parent";

const ChildcC = () => {
  return (
    <data.Consumer>
      {(name) => {
        return (
          <>
            <h1>My name is : {name}</h1>
          </>
        );
      }}
    </data.Consumer>
  );
};

export default ChildcC;
