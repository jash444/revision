import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import { reducer } from "./reducer";
const rootReducer=combineReducers({
   company:reducer
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store= legacy_createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)