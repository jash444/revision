import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addUserRequest, addUserSuccess } from "./redux/action";

export default function App() {
 const dispatch=useDispatch

  dispatch(addUserRequest({}))
  dispatch(addUserSuccess({
    name:"jaswanth",
    id:123,
    title:"hello"

  }))
  const count = useSelector((state) =>state.reducer);
  console.log(count)

  return (
    <div className="App">
    </div>
  );
}
