import React from "react";
import FunctionComponrnts from "./components/FunctionComponrnts";

const App = () => {
  let CEO_Name = "tony stark";
  return (
    <>
      <FunctionComponrnts CEO_Name={CEO_Name} message="Hii Durga" Year={99} />
      <p>Use props: {CEO_Name}</p>
    </>
  );
};

export default App;
