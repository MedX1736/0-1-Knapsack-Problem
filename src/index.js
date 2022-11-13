import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initState = {
  weight : 30,
}

function weightReducer(state = initState, action){
    if(action.type == 'UPDATE'){
      return {
        ...state, 
        weight : action.weight,
      } ;
    }
    else{
      return state ;
    }
}

const store = createStore(weightReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
