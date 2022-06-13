import * as types from "./actiontypes"
import axios from "axios"
const addcompneyRequest=(payload)=>{
    return{
        type:types.ADD_COMPENY_REQUEST,
        payload
    }

}
const addcompneySuccess=(payload)=>{
    return{
        type:types.ADD_COMPENY_SUCCESS,
        payload

    }
}
const addcompneyFailure=(payload)=>{
    return{
        type:types.ADD_COMPENY_FAILURE,
        payload
    }

}
const addcompney= (payload)=>{
  return(dispatch)=>{
    dispatch(addcompneyRequest());
   console.log(payload)
   axios.post(`http://localhost:3004/company`,)
    .then((r)=>dispatch(addcompneySuccess(r.data)))
    .catch((e)=>dispatch(addcompneyFailure(e)))
}

 
}

const fetchdataRequest=(payload)=>{
    return{
        type:types.FETCH_DATA_REQUEST,
        payload
    }

}
const fetchdataSuccess=(payload)=>{
    return{
        type:types.FETCH_DATA_SUCCESS,
        payload

    }
}
const fetchdataFailure=(payload)=>{
    return{
        type:types.FETCH_DATA_FAILURE,
        payload
    }

}
const fetchdata= (payload)=>{
    return(dispatch)=>{
        dispatch(fetchdataRequest());
       
       axios.get(`http://localhost:3004/company`)
        .then((r)=>dispatch(fetchdataSuccess(r.data)))
        .catch((e)=>dispatch(fetchdataFailure()))
    }
    
}



export {fetchdata,addcompney}

