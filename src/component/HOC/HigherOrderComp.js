import React, { useState } from "react";
//Higher order component is component which takes component as input andreturns a new component

const HigherOrderComp = () => {
  return (
    <div>
      <div style={{ margin: "100px" }}>
        <HOCRed comp={Counter} /> <br />
        <HOCGreen comp={Counter} /> <br />
        <HOCBlue comp={Counter} />
      </div>
    </div>
  );
};

function HOCRed(props) {
  return (
    <h2 style={{ background: "red", width: "100px" }}>
      <props.comp />
    </h2>
  );
}
function HOCGreen(props) {
  return (
    <h2 style={{ background: "green", width: "100px" }}>
      <props.comp />
    </h2>
  );
}
function HOCBlue(props) {
  return (
    <h2 style={{ background: "Blue", width: "100px" }}>
      <props.comp />
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        style={{ border: "3px solid black" }}
        onClick={() => setCount(count + 1)}
      >
        Update
      </button>
    </>
  );
}

export default HigherOrderComp;
