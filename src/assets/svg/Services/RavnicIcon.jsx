import * as React from "react";
import ravnic from "./ravnic.jpg";

function LogoImage(props) {
  return (
    <img src={ravnic} alt="Doctor Who" width={240} height={240} {...props} />
  );
}

export default LogoImage;
