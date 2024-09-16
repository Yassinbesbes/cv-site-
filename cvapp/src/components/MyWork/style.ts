import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledRow = styled.div<{ reverse?: boolean }>`
  display: flex;
  margin-bottom: 3rem;
  flex-direction: ${(props) =>
    props.reverse ? "row-reverse" : "row"}; /* Switch row direction */
`;

export const StyledCol = styled.div<{ size?: number }>`
  flex: ${(props) => (props.size ? props.size / 12 : 1)};
  padding: 10px;
`;

export const Image = styled.img`
  width: 400px;
  height: 300px;
  border-radius: 25px;
  object-fit: cover; /* Ensure the image covers the area without stretching */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */

  &:hover {
    transform: scale(1.05); /* Slight zoom on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
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
  color: #9381ff;
  font-weight: 700;
`;

export const ProjectTitle = styled.h3`
  text-align: left;
  margin-bottom: 20px;
  color: #000;
`;

export const SubTitle = styled.h6`
  text-align: center;
  margin-bottom: 50px;
`;

export const TechList = styled.ul`
  list-style-type: none; /* Remove default bullets */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
  display: flex; /* Use flexbox to align items in one line */
  gap: 10px; /* Add space between list items */
`;

export const TechListItem = styled.li`
  display: inline;
  margin: 0;
  padding: 5px;
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
  border-radius: 34.5px;
  background: linear-gradient(
    90deg,
    rgba(140, 219, 221, 0.99) 0%,
    rgba(255, 217, 138, 0.16) 31.9%,
    rgba(163, 148, 255, 0.26) 62.4%,
    rgba(255, 115, 119, 0.4) 92.4%
  );
  border-radius: 25px;
  border: none;

  /* Add animation for background gradient */
  animation: gradientAnimation 5s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 30%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Ensure the background gradient animates properly */
  background-size: 200% 200%;
`;
