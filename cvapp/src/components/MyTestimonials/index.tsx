import React from "react";
import { sections } from "../../data/MyTestimonials.js";
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  Description,
  Title,
  CustomerName,
  SubTitle,
  CustomerPosition,
} from "./style.ts";

function MyTestimonials() {
  return (
    <StyledContainer>
      <Title>My Testimonials</Title>
      <SubTitle>I'm happy that you like my work and wish to share the feedback</SubTitle>
      {Object.values(sections).map((section, index) => (
        <StyledRow key={index}>
          <StyledCol size={5} className="links-section">
            {/* You can add links or images here if necessary */}
          </StyledCol>
          <StyledCol size={9} className="content-section">
            <Description>{section.description}</Description>
            <CustomerName>{section.Name}</CustomerName>
            <CustomerPosition>{section.Position}</CustomerPosition>
          </StyledCol>
        </StyledRow>
      ))}
    </StyledContainer>
  );
}

export default MyTestimonials;