import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { MODE } from "../config/env";

//reducers
import categoryReducer from "./reducers/categoryReducer";
import imageReducer from "./reducers/imageReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  image: imageReducer,
});

const middlewares = [];

if (MODE === "development") {
  middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(thunk, ...middlewares));
