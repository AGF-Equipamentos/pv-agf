import { combineReducers } from "redux";

import select_infos from "./select_infos";
import bd_selects from "./bd_selects";
import productList from "./productList";
import paymentList from "./paymentList";
import clientList from "./clientList";
import orderList from "./orderList";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  select_infos,
  bd_selects,
  productList,
  paymentList,
  clientList,
  orderList,
  form: formReducer,
});
