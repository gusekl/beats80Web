import React from "react";
import './navbar.css'
import ModuleClickable from "./moduleClickable";

const renderModules = (modules) => {
  return modules.map(module => <ModuleClickable module={module}/>);
}

const Navbar = ({modules}) => {
  return (
    <div className="nav-container">
        <img src={require("../../images/Beatslogga.png")} height={"70"} alt="Beats 80 logo"/>
        <div className="nav">
          {renderModules(modules)}
        </div>
    </div>
  )
}

export default Navbar