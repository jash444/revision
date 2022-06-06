import { actionTypes } from "./action";

const initState = {
    isLoading:false,
    error:false,
    data:[
        {name:"",
        id:132,
        title:""}
]

};

function reducer(state = initState, action) {

    switch (action.type) {
        case actionTypes.ADD_USER_REQUEST:
          return {
              ...state,
              isLoading:true,
              error:false,
           
          };
        case actionTypes.ADD_USER_SUCCESS:
          return {
              ...state,
              isLoading:false,
              data:[action.payload],
  
           
          };
        case actionTypes.ADD_USER_FAILURE:
          return {
            ...state,
            isLoading:true,
            error:true,
          };
        default:
          return state;
      }
    
}


export default reducer;
