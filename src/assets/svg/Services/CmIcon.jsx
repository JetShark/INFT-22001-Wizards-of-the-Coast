import * as React from "react";
import cm from "./cm.jpg";

function LogoImage(props) {
  return (
    <img src={cm} alt="Doctor Who" width={240} height={240} {...props} />
  );
}

export default LogoImage;
