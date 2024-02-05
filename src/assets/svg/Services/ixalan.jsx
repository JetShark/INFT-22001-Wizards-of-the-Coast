import * as React from "react";
import ixalan from "./ixalan.jpg";

function LogoImage(props) {
  return (
    <img src={ixalan} alt="Doctor Who" width={240} height={240} {...props} />
  );
}

export default LogoImage;
