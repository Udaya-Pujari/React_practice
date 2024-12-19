// import React, { useState } from "react";

// const ChildToParent = () => {
//   const [data, setData] = useState("");
//   //fubction to handle data from child
//   const handleData = (childData) => {
//     setData(childData);
//   };
//   return (
//     <div>
//       <h1>Data from Child:{data}</h1>
//       <Child sendData={handleData} />
//     </div>
//   );
// };

// const Child = ({ sendData }) => {
//   return (
//     <button
//       onClick={() => {
//         sendData("Data from child");
//       }}
//       style={{ border: "1px solid black", margin: "100px" }}
//     >
//       data from child
//     </button>
//   );
// };

// export default ChildToParent;

import React from "react";

const ChildToParent = () => {
  const handleData = (data) => {
    console.log("reaciving data from the child:===> ", data);
  };
  return <Child onsendData={handleData} />;
};

const Child = ({ onsendData }) => {
  return (
    <button onClick={() => onsendData("Hello from Child")}>send data</button>
  );
};

export default ChildToParent;
