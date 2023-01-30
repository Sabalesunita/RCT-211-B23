import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  console.log(initialState);
  switch(action.type){
    case "NAME" :
    return {...state, name:action.payload}
    case "GENDER" :
    return {...state, gender:action.payload}
    case "ROLE" :
    return {...state, role:action.payload}
    default :
    return state;
  }

};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        {/* <h3>useReducer</h3> */}
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element">
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>
                Name  :
              </label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input attribute="Name" type="text" placeholder="Name" />
            </div>

            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>
                Gender  :
              </label>
              <select name="gender" data-testid="gender-select">
                <option>Female</option>
                <option>Male</option>
                <option>Trans</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role    :</label>
              <select name="role" data-testid="role-select">
                <option>Back End Developer</option>
                <option>Full Stack Developer </option>
                <option>Front End Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status   :</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export {reducer, initialState}
