import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


serviceWorker.unregister();









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
