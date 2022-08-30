import styled from "@emotion/styled";

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  margin: 3%;
  background-color: ${prop => prop.backgroundColor};
  border-radius: 12px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 25vh;
  padding: 3%;
  margin: 3%;
  background-color: ${prop => prop.backgroundColor};
  border-radius: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100vw;
  background-color: ${prop => prop.backgroundColor};
  border: none;
`;

