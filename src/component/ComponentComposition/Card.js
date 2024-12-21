import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const Card = ({ header, body, footer }) => {
  //Suppose if want to write a component inside another component is called component composition.
  //Using componet compostions we can have good maintainabilty and resuability of the code
  //eg:consider a card header,body and footer components we can use these components inside parent componrt Card
  return (
    <div>
      <CardHeader header={header} />
      <CardBody body={body} />
      <CardFooter footer={footer} />
    </div>
  );
};

export default Card;
