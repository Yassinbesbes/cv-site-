import React, { useState, useRef, useEffect } from "react";
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
  Card,
  RadioContainer,
  RadioButton,
  RadioLabel,
  Letter,
} from "./style.ts";

function MyTestimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cardRefs = useRef([]);

  const handleRadioChange = (index) => {
    setSelectedIndex(index);
    // Scroll the selected card into view
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  useEffect(() => {
    // Automatically scroll to the selected card when component mounts
    if (cardRefs.current[selectedIndex]) {
      cardRefs.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedIndex]);

  return (
    <StyledContainer>
      <Title>My Testimonials</Title>
      <Letter>T</Letter>

      <SubTitle>
        I'm happy that you like my work and wish to share the feedback
      </SubTitle>
      <StyledRow>
        {Object.values(sections).map((section, index) => (
          <StyledCol key={index} ref={(el) => (cardRefs.current[index] = el)}>
            <Card isSelected={selectedIndex === index}>
              <Description>{section.description}</Description>
              <CustomerName>{section.Name}</CustomerName>
              <CustomerPosition>{section.Position}</CustomerPosition>
            </Card>
          </StyledCol>
        ))}
      </StyledRow>
      <RadioContainer>
        {Object.values(sections).map((_, index) => (
          <RadioLabel key={index}>
            <RadioButton
              type="radio"
              name="testimonial"
              checked={selectedIndex === index}
              onChange={() => handleRadioChange(index)}
            />
          </RadioLabel>
        ))}
      </RadioContainer>
    </StyledContainer>
  );
}

export default MyTestimonials;
