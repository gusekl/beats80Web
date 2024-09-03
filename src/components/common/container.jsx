import React, { Children } from "react";

const Container = () => {
  return (
    <div>
      {Children.forEach(child => child)}
    </div>
  )
}

export default Container