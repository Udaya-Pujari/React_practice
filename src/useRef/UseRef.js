import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const refElement = useRef(null);
  useEffect(() => {
    //when ver my page reloads i wan tot make the input to be focused
    refElement.current.focus();
  }, []);
  return (
    <div>
      <h1>Learning UseRef</h1>
      <input
        ref={refElement}
        style={{ border: "1px solid blue", margin: "20px" }}
        type="text"
      />
    </div>
  );
};

export default UseRef;
