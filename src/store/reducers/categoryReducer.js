import { CATEGORY_TYPES } from "../types/categoryTypes";

const initialState = {
  categories: [],
  error: "",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_TYPES.GET_CATEGORIES_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case CATEGORY_TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
