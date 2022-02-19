import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImagesAction } from "./../../store/actions/imageAction";

//styles & components
import * as S from "./Category.styles";
import { Image } from "../../components/Image";
import { Button } from "../../components/Button";

export const Category = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const images = useSelector((state) => state.image.images);
  const [imagesLimit, setImagesLimit] = useState(10);

  useEffect(() => {
    dispatch(getImagesAction(imagesLimit, params.categoryId));
  }, [imagesLimit, params.categoryId]);

  const handleShowMore = () => {
    return setImagesLimit((prevState) => prevState + 10);
  };

  const handleShowLess = useCallback(() => {
    return imagesLimit > 10 && setImagesLimit((prevState) => prevState - 10);
  }, [imagesLimit]);

  return (
    <S.CategoryWrapper>
      <S.CategoryTitle>Category {params.categoryId}</S.CategoryTitle>
      <S.CategoryImagesContainer>
        {images.map((image) => (
          <Image
            url={image.url}
            categoryName={image.categories.name}
            key={image.id}
          />
        ))}
      </S.CategoryImagesContainer>
      <S.CategoryButtonsContainer>
        <Button click={handleShowMore} background={"green"}>
          Show More
        </Button>
        <Button click={handleShowLess} background={"darkred"}>
          Show Less
        </Button>
      </S.CategoryButtonsContainer>
    </S.CategoryWrapper>
  );
};
