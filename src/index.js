import React from 'react';
import ReactDOM from 'react-dom';


//Excercises
function MediaCard(props) {
return <div>
    <h2> {props.Title}</h2>
        <p> We are Learning <strong>{props.Body}</strong></p>
        <img src={props.imageUrl} /> 
</div>
}
ReactDOM.render(<MediaCard Title="REACT" Body="React" imageUrl='https://servmask.com/img/products/url.png'/>,document.querySelector('#root'));

// function Gate(props){
// return <div>
//     {props.isOpen? "Open" : "Close"}
// </div>
// }

// ReactDOM.render(<Gate isOpen={true}/>,document.querySelector('#root'));
