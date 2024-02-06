import * as React from "react";
import phyr from "./phyr.jpg";

function LogoImage(props) {
  return (
    <img src={phyr} alt="Doctor Who" width={240} height={240} {...props} />
  );
}

export default LogoImage;
