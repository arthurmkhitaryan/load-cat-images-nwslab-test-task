import React from "react";

// styles
import * as S from "./Button.styles";

export const Button = ({
  type = "button",
  color,
  background,
  children,
  click,
}) => {
  return (
    <S.ButtonWrapper>
      <S.BTN color={color} background={background} type={type} onClick={click}>
        {children}
      </S.BTN>
    </S.ButtonWrapper>
  );
};
