import React, { useState } from "react";

const UseState = () => {
  //useState : it accepts the one argument called initialValue and returns array of two element.
  // i.e  [currentState,function of CurrentState]=useState(initialValue)
  //current state: current stae is nothing but initial value
  //function of currentState :has ability to change the varialble based on the resonse to interaction
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <br />
      <button
        className="border border-black"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default UseState;
