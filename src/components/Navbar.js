import React from "react";
import Button from "./common/button";

const renderModules = (modules) => {
  modules.forEach(module => {
    console.log(module);
  });
}

const Navbar = ({modules}) => {
  return (
  <div>
    <Button text={"Knapp"}/>
    {renderModules(modules)}
  </div>
  )
}

export default Navbar