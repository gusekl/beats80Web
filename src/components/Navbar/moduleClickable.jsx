import React from "react";

const ModuleClickable = ({module}) => {
  return (
    <button className="module-clickable">
      <h4 className="module-text">
        {module.name}
      </h4>
    </button>
  )
}

export default ModuleClickable