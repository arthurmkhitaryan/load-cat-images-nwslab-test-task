import React, { useEffect } from "react";
import * as S from "./Dashboard.styles";
import { useDispatch, useSelector } from "react-redux";
import { getImagesAction } from "./../../store/actions/imageAction";
import { Image } from "../../components/Image";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.image.images);

  useEffect(() => {
    dispatch(getImagesAction(10, 1));
  }, []);

  return (
    <S.DashboardWrapper>
      <S.DashboardTitle>Dashboard</S.DashboardTitle>
      <S.DashboardImagesContainer>
        {images.map((image) => (
          <Image
            url={image.url}
            categoryName={image.categories.name}
            key={image.id}
          />
        ))}
      </S.DashboardImagesContainer>
    </S.DashboardWrapper>
  );
};
