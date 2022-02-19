import styled from "styled-components/macro";

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BTN = styled.button`
  background-color: ${({ background }) => (background ? background : "green")};
  color: ${({ color }) => (color ? color : "white")};
  font-size: 20px;
  padding: 10px 30px;
  max-width: 400px;
  cursor: pointer;
`;
