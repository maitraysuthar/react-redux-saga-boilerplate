import { combineReducers } from "redux";
import loginReducer from "../Login/reducer";
//import registerReducer from "../Register/reducer";
import bookReducer from "../Book/reducer";

export const mainReducer = combineReducers({
  login: loginReducer,
  //register: registerReducer
  books: bookReducer
});
