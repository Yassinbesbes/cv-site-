import styled from "styled-components";

// Styled Components
export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledRow = styled.div<{ reverse?: boolean }>`
  display: flex;
  margin-bottom: 3rem;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column; /* Stack columns vertically on mobile */
    align-items: center; /* Center content alignment */
  }
`;

export const StyledCol = styled.div<{ size?: number }>`
  flex: ${(props) => (props.size ? props.size / 12 : 1)};
  padding: 10px;
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
`;
