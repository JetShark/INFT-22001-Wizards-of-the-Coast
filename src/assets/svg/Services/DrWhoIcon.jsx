import * as React from "react";
import doctorWho from "./who_sma_fb_1000x1000_en.jpg";

function LogoImage(props) {
  return (
    <img src={doctorWho} alt="Doctor Who" width={240} height={240} {...props} />
  );
}

export default LogoImage;
