import React from "react";
import Image from "react-bootstrap/Image";
import { DescripImg } from "../../images/images.js"; // Ensure the import is correct
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Title,
  SubTitle,
  StyledImage,
  Letter,
  CircleContact,
  Circle,
  StyledColContent,
  CircleTitle
} from "./style.ts";

function Footer() {
  return (
    <StyledContainer>
      <StyledRow>
        <StyledCol className="links-section">
          <Title>Are you minding a project ?</Title>
          <SubTitle>Let’s work together to build something awesome</SubTitle>
          <CircleContact>
          <CircleTitle>Hire Me</CircleTitle>

          </CircleContact>

        </StyledCol>
        <StyledColContent className="content-section">
          <Circle>
            <StyledImage src={DescripImg} alt="Description" />
            <Letter>CM</Letter>
          </Circle>
        </StyledColContent>
      </StyledRow>
    </StyledContainer>
  );
}

export default Footer;
