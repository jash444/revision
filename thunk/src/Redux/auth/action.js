import axios from "axios"
export const actionTypes = {
    //LOADING, SUCCESS, FAILURE
    LOADING:"LOADING",
  SUCCESS:"SUCCESS",
  FAILURE:"FAILURE",
  LOGOUTSUCCESS:"LOGOUTSUCCESS"
  };
  export const startLogin = content => {
    return dispatch => {
     // dispatch(loginProcessing());
      axios
        .post("https://reqres.in/api/login", content)
        .then(res => {
         
         // dispatch(login(content));
         console.log(content)
        })
        .catch(error => {
         
          console.log(error);
        });
    };
  };
  

  export const loginLoading = () => {
    return {
      type:actionTypes.LOADING
  
  
    }
  };

  export const loginSuccess = (data) =>
  
 {  
  console.log(data)
   return {
    type:actionTypes.SUCCESS,
    paylod:data
  
  
  }
  
  };

  export const loginFailure = () => {
    return {
      type:actionTypes.FAILURE
    }
  
  };
  