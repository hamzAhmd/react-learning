import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






//Excercises
// function MediaCard(props) {
// return <div>
//     <h2> {props.Title}</h2>
//         <p> We are Learning <strong>{props.Body}</strong></p>
//         <img src={props.imageUrl} /> 
// </div>
// }
// ReactDOM.render(<MediaCard Title="REACT" Body="React" imageUrl='https://servmask.com/img/products/url.png'/>,document.querySelector('#root'));

// function Gate(props){
// return <div>
//     {props.isOpen? "Open" : "Close"}
// </div>
// }

// ReactDOM.render(<Gate isOpen={true}/>,document.querySelector('#root'));
