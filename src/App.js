import React,{useState} from 'react';
function App() {
  const [count, setCount] = useState(()=>{
    console.log('run function') //if require to add computational functionalities
    return 4                   // we use function in a useState
  })
  const [theme, setTheme] = useState('blue')
  function decrementcount (){
    setCount(preCount => preCount - 1)
    setTheme('blue')
  }
  function incrementcount (){
    setCount(preCount => preCount + 1)
    setTheme('red')
  }
  return (
    <div >
      <button onClick = {incrementcount}>+</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick = {decrementcount}>-</button>
    </div>
  );
}

export default App;
