import * as React from "react";
import mma from "./mma.jpg";

function LogoImage(props) {
  return (
    <img src={mma} alt="Doctor Who" width={240} height={240} {...props} />
  );
}

export default LogoImage;
