
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
            state=action.paylod
         
            return {
              state
               
               
                
                
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