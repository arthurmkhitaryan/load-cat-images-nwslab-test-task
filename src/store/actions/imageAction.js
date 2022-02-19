import api from "../../repository/RepositoryFactory";
import { IMAGES_TYPES } from "../types/imageTypes";

export const getImagesAction = (limit, categoryId) => {
  return (dispatch) => {
    return api
      .cats("getImages", { limit, categoryId })
      .then(({ data }) => {
        dispatch({
          type: IMAGES_TYPES.GET_IMAGES_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: IMAGES_TYPES.GET_IMAGES_FAILED,
          payload: error,
        });
      });
  };
};
