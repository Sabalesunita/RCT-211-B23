import React from "react";
import { useReducer } from "react";
import { initialState ,reducer} from "../App";




const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  const [userData,dispatch] = useReducer(reducer,initialState);

  const handleSubmit = (e)=> {
    e.preventDefault ();
    console.log(userData);
  };

  return (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input> type="text" 
             value={userData.name}
             onChange={(e)=> dispatch({type:"NAME", payload:e.target.value})}
    </input>
  
    <button>Submit</button>
    </form>
  );
};
export { UserRow };
