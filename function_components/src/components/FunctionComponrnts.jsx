import React from "react";

const FunctionComponrnts = (props) => {
  let fName = "peter parker";
  let job = "spider man";
  let color = "red and blue";
  const CEO_Name = "Durga";
  return (
    <>
      <h1>welcome to FunctionComponrnts</h1>
      <p>Name: {fName}</p>
      <p>Job: {job}</p>
      <p>Color: {color}</p>
      <p>Name of CEO By uses in Props :{props.CEO_Name}</p>
      <p>{props.message}</p>
      <p>{props.Year}</p>
    </>
  );
};

export default FunctionComponrnts;
