import * as React from "react";
import eldraine from "./eldraine.jpg";

function LogoImage(props) {
  return (
    <img src={eldraine} alt="Doctor Who" width={240} height={240} {...props} />
  );
}

export default LogoImage;
