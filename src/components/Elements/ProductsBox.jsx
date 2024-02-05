import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import DrWhoIcon from "../../assets/svg/Services/DrWhoIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";

// Additional icons
import cmIcon from "../../assets/Services/cm.png";
import eldraineIcon from "../../assets/Services/eldraine.png";
import ixalanIcon from "../../assets/Services/ixalan.png";
import manorIcon from "../../assets/Services/manor.png";
import mmaIcon from "../../assets/Services/mma.png";
import phyrIcon from "../../assets/Services/phyr.png";
import ravnicIcon from "../../assets/Services/ravnic.png";

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
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    case "cm":
      getIcon = <img src={cmIcon} alt="CM Icon" />;
      break;
    case "eldraine":
      getIcon = <img src={eldraineIcon} alt="Eldraine Icon" />;
      break;
    case "ixalan":
      getIcon = <img src={ixalanIcon} alt="Ixalan Icon" />;
      break;
    case "manor":
      getIcon = <img src={manorIcon} alt="Manor Icon" />;
      break;
    case "mma":
      getIcon = <img src={mmaIcon} alt="MMA Icon" />;
      break;
    case "phyr":
      getIcon = <img src={phyrIcon} alt="Phyr Icon" />;
      break;
    case "ravnic":
      getIcon = <img src={ravnicIcon} alt="Ravnic Icon" />;
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
