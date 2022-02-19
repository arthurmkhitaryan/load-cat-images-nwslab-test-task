import styled from "styled-components/macro";

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  width: 300px;
  max-height: 300px;
  align-items: center;
`;

export const Image = styled.img`
  object-fit: cover;
  max-width: 200px;
  max-height: 200px;
`;

export const ImageCategoryName = styled.h2``;
