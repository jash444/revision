import { useDispatch } from "react-redux";

const initialState = {
  count: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1
      };
    case "SUBTRACT":
      return {
        ...state,
        count: state.count - 1
      };
    case "ASYNC_ADD":
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};


