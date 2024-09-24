import React, { useState, useEffect } from "react";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock } from '@fortawesome/free-regular-svg-icons';


const Timer = (props) => {
	


	return (
		<div className="d-flex justify-content-center p-5 bd-highlight bg-black">
			<div className="digitos d-inline-flex text-white">
			<div><i className="fa-regular fa-clock"></i></div>
			<div className="">{props.numberSix%10}</div> 
			<div>{props.numberFive%10}</div>
			<div>{props.numberFour%10}</div>
			<div>{props.numberThree%10}</div>
			<div>{props.numberTwo%10}</div>
			<div>{props.numberOne%10}</div>
			</div>

		</div>
	);
};

export default Timer;