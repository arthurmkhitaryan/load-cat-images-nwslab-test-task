import { IMAGES_TYPES } from "../types/imageTypes";

const initialState = {
  images: [],
  error: "",
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES_TYPES.GET_IMAGES_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case IMAGES_TYPES.GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
