import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
`;
export const StyledRow = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  margin-bottom: 3rem;
  overflow-x: hidden; // Allow horizontal scrolling
  padding: 10px; // Add padding if desired

  @media (max-width: 768px) {
    width: 100vw; // Full width for mobile
    flex-wrap: nowrap; // Ensure items do not wrap
  }
`;


export const StyledCol = styled.div`
  flex: 0 0 auto; // Allow flexible width for larger screens
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    // On mobile, take full width for a single card
    flex: 0 0 100%;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 500px; // Width for larger screens
  min-height: 250px;
  transition: transform 0.2s, border 0.2s;
  scroll-snap-align: start;

  ${(props) =>
    props.isSelected
      ? `border: 2px solid #9381ff; transform: scale(1.05);`
      : `border: 2px solid transparent; transform: scale(1);`}

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%; // Full width for mobile
    min-height: auto; // Adjust height if needed
  }
`;

export const Description = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  color: #535353;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CustomerName = styled.h6`
  text-align: center;
  margin-bottom: 20px;
  color: #000;
  font-weight: 600;
`;

export const SubTitle = styled.h6`
  text-align: center;
  margin-bottom: 50px;
`;

export const CustomerPosition = styled.h5`
  text-align: center;
  color: #777;
`;

// Style for the radio buttons container
export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// Style for each radio button
export const RadioButton = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #9381ff;
  margin-right: 10px;
  cursor: pointer;

  &:checked {
    background-color: #9381ff;
  }
`;

// Style for the radio button label
export const RadioLabel = styled.label`
  margin: 0 10px;
  display: inline-flex;
  align-items: center;
`;




export const Letter = styled.h1`
  background: linear-gradient(180deg, #e9e9e9 0%, #fafaf7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Inter", sans-serif;
  position: absolute;
  z-index: -1;
  right: -10%;
  
  font-weight: 800;
  font-size: 700px;
  text-align: center; /* Center the letters together */

  /* Clip the text to show only half of the second letter */
  overflow: hidden;
  width: 1.7ch; /* Adjust this value to control how much of the second letter is shown */
  white-space: nowrap;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 300px;
    z-index: 0;
    right: -0%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;