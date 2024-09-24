//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";


import Timer from "./Timer.jsx";
let counter = 0;
setInterval(() => {

    let one = Math.floor(counter/1)
    let two = Math.floor(counter/10)
    let three = Math.floor(counter/100)
    let four = Math.floor(counter/1000)
    let five = Math.floor(counter/10000)
    let six = Math.floor(counter/100000)
    counter++

    ReactDOM.createRoot(document.getElementById('app')).render(
        <Timer 
        numberOne={one} 
        numberTwo={two} 
        numberThree={three}
        numberFour={four}
        numberFive={five}
        numberSix={six}
        
        />
    );

}, 1000)



