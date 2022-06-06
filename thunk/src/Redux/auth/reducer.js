
import { actionTypes } from "./action";
const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
  };

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return { ...state, authError: "" };
        case actionTypes.SUCCESS:
            console.log(state);
            return {
              addUser: action.payload
            };
        case actionTypes.FAILURE:
            return state;
        case actionTypes.LOGOUTSUCCESS:
            return state;
        default:
            return state;
    }
};

export default Reducer;