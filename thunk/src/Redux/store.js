import { legacy_createStore, compose, applyMiddleware} from "redux";
import  Reducer  from "./auth/reducer";

import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=legacy_createStore(
  Reducer,
 composeEnhancers(applyMiddleware(thunk))
  )
export default store