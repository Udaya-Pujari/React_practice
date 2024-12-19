import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);

  const multiplying = useMemo(
    function multiply() {
      console.log("multiplying");
      return add * 10;
    },
    [add]
  );

  // function multiply() {
  //   console.log("multiplying");
  //   return sum * 10;
  // }

  return (
    <div>
      <div>UseMemo Denonstration</div>
      <div>{multiplying}</div>
      <div>sum=={add}</div>
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Add
      </button>
      <hr />
      <div>SUb=={sub}</div>
      <button
        onClick={() => {
          setSub(sub - 1);
        }}
      >
        sub
      </button>
    </div>
  );
};

export default UseMemo;
