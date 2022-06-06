import { legacy_createStore, combineReducers,compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducer from "./auth/reducer";

const rootReducer = combineReducers({
  user: Reducer
});

const configureStore = () => {
  return legacy_createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
  );
};

export default configureStore;