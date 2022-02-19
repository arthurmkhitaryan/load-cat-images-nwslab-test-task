import styled from "styled-components/macro";

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CategoryTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CategoryImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  height: 100%;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
