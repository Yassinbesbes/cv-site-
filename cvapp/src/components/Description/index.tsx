import React from "react";
import { sections } from "../../data/Description.js"; // Import the data
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Title,
  SubTitle,
  Descrip,
  Button,
  StyledImage
} from "./style.ts";
import { DescripImg } from '../../images/images.js';

function Description() {
  const handleLearnMore = () => {
    console.log("Learn More clicked!");
  };

  const handleContactMe = () => {
    console.log("Contact Me clicked!");
  };

  return (
    <StyledContainer>
      <StyledRow>
        <StyledCol className="links-section">
          <Title>{sections.title}</Title>
          <SubTitle>{sections.subtitle}</SubTitle>
          <Descrip>{sections.description}</Descrip>
          <div>
            <Button onClick={handleLearnMore}>View My Work</Button>
          </div>
        </StyledCol>
        <StyledCol className="content-section">
          <StyledImage src={DescripImg} alt='Description' />
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
}

export default Description;
