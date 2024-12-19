import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const childTrigger = useCallback(() => {}, [count]);
  return (
    <div>
      <div>
        <h2>Learning useCallback</h2>
      </div>
      <div>
        <Child childTrigger={childTrigger} />
      </div>
      <div>
        <h1>{add}</h1>
        <button onClick={() => setAdd(add + 1)}>Addition</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>counter</button>
      </div>
    </div>
  );
};

export default UseCallback;
