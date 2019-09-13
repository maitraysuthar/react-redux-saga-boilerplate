import { combineReducers } from "redux";
import loginReducer from "../Login/reducer";
//import registerReducer from "../Register/reducer";

export const mainReducer = combineReducers({
  login: loginReducer,
  //register: registerReducer
});
