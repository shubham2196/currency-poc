import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { path as loginPath } from "./home/homeSelector";

import loginReducer from "./home/homeReducer";
// TODO: find a better solution
//const localize = path => path.replace(/^features\./, "");
export const allReducers = {
  [loginPath]: loginReducer
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    ...allReducers
  });
