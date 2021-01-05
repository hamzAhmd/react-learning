import React,{useReducer} from 'react';
const ACTIONS = {
    INCREMENT:'incrementcount',
    DECREMENT:'decrementcount'
}

function reducer(state,action) {
    switch(action.type){
        case ACTIONS.DECREMENT:
        return  {count:state.count-1}
        case ACTIONS.INCREMENT:
        return  {count:state.count+1}
        default:
            return {state}
    }
    
}
export default function App() {
  const [state,dispatch] = useReducer(reducer,{count:0})
    function decrementcount (){
    dispatch({type:ACTIONS.DECREMENT})
    }
  function incrementcount (){    
    dispatch({type:ACTIONS.INCREMENT})
  }
  return (
    <div >
      <button onClick = {incrementcount}>+</button>
      <span>............</span>
      <button onClick = {decrementcount}>-</button>
    <h1>{state.count}</h1>
    </div>
  );
}


