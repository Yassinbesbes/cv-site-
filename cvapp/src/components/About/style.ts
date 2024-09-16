import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
  text-align: center;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  text-align: justify;
  margin-bottom: 20px;
  color: #535353;
`;

export const SubTitle = styled.h6`
  text-align: center;
  margin-bottom: 50px;
`;
