import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff; /* Ensures the container has a white background */
`;

export const StyledRow = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

export const StyledCol = styled.div`
  flex: ${(props) => (props.size ? props.size / 12 : 1)};
  padding: 10px;
`;

export const Title = styled.h1`
  text-align: left;
  font-weight: 700;
  color: black;
`;

export const SubTitle = styled.h1`
  text-align: left;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #6C6EB3 0%, #426BC4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Descrip = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  color: #535353;
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #6C6EB3 0%, #426BC4 100%);
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 10px;
  font-weight: 600;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledImage = styled.img`
  width: 100%; /* Make the image responsive */
  height: auto; /* Maintain aspect ratio */
  border: 5px solid #ffffff; /* Optional: border to enhance the image */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Add subtle shadow to the image */
`;
