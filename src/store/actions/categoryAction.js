import api from "../../repository/RepositoryFactory";
import { CATEGORY_TYPES } from '../types/categoryTypes';

export const getCategoriesAction = () => {
  return (dispatch) => {
    return api.cats("getCategories")
        .then(({ data }) => {
            dispatch({
                type: CATEGORY_TYPES.GET_CATEGORIES_SUCCESS,
                payload: data
            })
        })
        .catch(error => {
            dispatch({
                type: CATEGORY_TYPES.GET_CATEGORIES_FAILED,
                payload: error
            })
        })
  };
};
