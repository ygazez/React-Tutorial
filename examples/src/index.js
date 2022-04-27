import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const date = new Date();
const currenttime = date.getHours();

let greeting;

const customStyle = {
   color:""
}
if(currenttime<12){
   greeting = "GOOD MORNİNG";
   customStyle.color = "green";
}
else if(currenttime<18){
   greeting = "GOOD AFTERNOON";
   customStyle.color = "blue";
}
else {
   greeting="GOOD NİGHT";
   customStyle.color = "pink";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>

<h1 className='header' style = {customStyle} >{greeting} </h1>

 </div>,
    

);

