import React, {useState} from "react";
import Sonss from "./child1";
import Counterapp from "./counterapp";


function App() {
    const count = useState(()=>{
        return (25*2*2*424*42)})
  return (
    <Counterapp.Provider value = {count}>
    <div>
      <Sonss/>
    </div>
     </Counterapp.Provider>
  );
}

export default App;

// **COUNTER APP USING USESTATE HOOK**
// import React,{useState} from 'react';
// function App() {
//   const [count, setCount] = useState(()=>{
//         return 4
//   })
//     function decrementcount (){
//     setCount(preCount => preCount - 1)
//   }
//   function incrementcount (){
//     setCount(preCount => preCount + 1)
//   }
//   return (
//     <div >
//       <button onClick = {incrementcount}>+</button>
//       <span>{count}</span>
//       <button onClick = {decrementcount}>-</button>
//     </div>
//   );
// }

// export default App;
