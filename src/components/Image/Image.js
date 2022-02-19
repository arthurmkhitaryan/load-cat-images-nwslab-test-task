import React from "react";

// styles
import * as S from "./Image.styles";

export const Image = ({ url, categoryName }) => {
  return (
    <S.ImageWrapper>
      <S.Image src={url} alt={`${categoryName}-cat`} />
    </S.ImageWrapper>
  );
};
