import * as React from "react";
import manor from "./manor.jpg";

function LogoImage(props) {
  return (
    <img src={manor} alt="Doctor Who" width={240} height={240} {...props} />
  );
}

export default LogoImage;
