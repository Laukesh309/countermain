import React from 'react';
import { connect } from 'react-redux';
import {increment,decreament} from "../src/action/actionType"
import store from "../src/store/store"



function App({state,Inc,dec}) {
  console.log("this is state maethod",Inc,dec)
  return (
    <div className="App">
      <h1>{store.getState()} incrementType</h1>
      <button onClick={()=>Inc()}>increment</button>
      <button onClick={()=>dec()}>decreament</button>
      <button onClick={()=>store.dispatch(increment)}> third Increament</button>

    </div>
  );
}


function mapStateToProps(state){
  return{
    state
  }
}
function mapDispatchToProps(dispatch){
  return {
    Inc:()=> dispatch(increment),
    dec:()=>dispatch(decreament)
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(App)
