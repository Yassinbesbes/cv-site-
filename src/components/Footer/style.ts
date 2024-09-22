import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 10% auto;
  padding: 20px;
`;

export const StyledRow = styled.div`
  display: flex;
  margin-bottom: 3rem;
  flex-wrap: wrap; /* Ensure items wrap on smaller screens */
`;

export const StyledCol = styled.div`
  flex: ${(props) => (props.size ? props.size / 12 : 1)};
  padding: 10px;

  &.links-section {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    @media screen and (max-width: 767px) {
      display: none; /* Hide on small screens */
    }
  }

  &.links-section ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: inline-block;
  }

  &.links-section ul li {
    margin-bottom: 10px;
  }

  &.links-section ul li a {
    text-decoration: none;
    color: #b3b3b3;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s; /* Smooth transition for background color */
  }

  &.links-section ul li a.active {
    color: #000; /* Optional: ensure text color contrasts with background */
  }

  &.content-section {
    flex: 1; /* Ensure content takes remaining space */
    @media screen and (max-width: 767px) {
      flex: 100%; /* Full width on small screens */
    }
  }

  &.content-section h4 {
    margin-top: 0;
    text-align: center;

    @media screen and (min-width: 767px) {
      display: none; /* Full width on small screens */
    }
  }
`;

export const Title = styled.h1`
  text-align: left;
  margin-bottom: 20px;
  font-weight: 700;
  z-index: 3;
  position:relative;
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;



export const SubTitle = styled.h6`
  text-align: left;
  margin-bottom: 50px;
  z-index: 3;
  position:relative;
`;

export const Letter = styled.h1`
  background: linear-gradient(180deg, #e9e9e9 0%, #fafaf7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Inter", sans-serif;
  position: absolute;
  z-index: -3; /* Changed to -1 to place it behind other content */
  left: -10%;
  font-weight: 800;
  font-size: 700px;
  text-align: center; /* Center the letters together */

  /* Clip the text to show only half of the second letter */
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 300px;
    z-index: -1; /* Further lower z-index on mobile */
    left: -30%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;


export const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 630px) {
    width: 200px;
    height: 200px;
  }
`;
export const CircleContact = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(90deg, #6c6eb3 0%, #426bc4 100%);
  z-index: 3;
  position: relative;
  display: flex; /* Add this to use flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */


`;

export const CircleTitle = styled.h2`
  position: absolute; /* Keep it in the center of the circle */
  color: white; /* Change to your desired color */
  font-size: 50px; /* Adjust font size as needed */
  text-align: center;
  z-index: 4; /* Ensure it's above the circle background */
`;


export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 3;
`;


export const StyledColContent = styled(StyledCol)`
  display: flex;
  flex-direction: column;
  align-items: center;
  // Add any additional letter styles here if needed
`;