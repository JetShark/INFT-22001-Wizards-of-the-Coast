import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import DrWhoIcon from "../../assets/svg/Services/DrWhoIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";

// Additional icons
import CmIcon from "../../assets/svg/Services/CmIcon";
import EldraineIcon from "../../assets/svg/Services/EldraineIcon";
import IxalanIcon from "../../assets/svg/Services/IxalanIcon";
import ManorIcon from "../../assets/svg/Services/ManorIcon";
import MmaIcon from "../../assets/svg/Services/MmaIcon";
import PhyrIcon from "../../assets/svg/Services/PhyrIcon";
import RavnicIcon from "../../assets/svg/Services/RavnicIcon";

export default function ProductsBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "drwho":
      getIcon = <DrWhoIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    case "cm":
      getIcon = <CmIcon />;
      break;
    case "eldraine":
      getIcon = <EldraineIcon />;
      break;
    case "ixalan":
      getIcon = <IxalanIcon />;
      break;
    case "manor":
      getIcon = <ManorIcon />;
      break;
    case "mma":
      getIcon = <MmaIcon />;
      break;
    case "phyr":
      getIcon = <PhyrIcon />;
      break;
    case "ravnic":
      getIcon = <RavnicIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
