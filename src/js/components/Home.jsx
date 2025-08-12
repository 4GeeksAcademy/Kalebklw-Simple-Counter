import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
// import Counter from "./Counter"


// condition ? do this : do that

const Home = ({time}) => {
	const stringTime = time.toString()
	// console.log(stringTime + 1);
	 
	const digit1 = time > 999 ? stringTime[3] : time > 99 ? stringTime[2] : time < 100 && time > 9 ? stringTime[1] : time < 10 ? stringTime[0] : stringTime[0]
	const digit2 = time > 999 ? stringTime[2] : time > 99 ? stringTime[1] : time < 10 ? "" : stringTime[0]  
	const digit3 = time > 999 ? stringTime[1] : time > 99 ? stringTime[0] : "" 
	const digit4 = time > 999 ? stringTime[0] : ""
	
	15
	// digit4 digit3 digit2 digit1 

	// singleDigit
	// digit1 = stringTime [0]
	// digit2 = 0
	
	// doubleDigit
	// digit1 = stringTime[1]
	// digit2 = stringTime[0]


	// tripleDigit
	// digit1 = stringTime[2]
	// digit2 = stringTime[1]
	// digit3 = stringTime[0]

	// 1 
	// 23
	// 297
	return (
		<div className=" d-flex justify-content-center text-center  mt-5 mx-5" style={{height: "75px", borderRadius:"20px"}}>
			<FontAwesomeIcon icon={faClock } />
			<span className="digit4 bg-secondary p-3 m-2" id="tenthsPlace" style={{borderRadius:"10px"}}>
				{digit4}
			</span>
			
			<span className="digit3 bg-secondary p-3 m-2" id="tenthsPlace" style={{borderRadius:"10px"}}>
				{digit3}
			</span>
			
			<span className="digit2 bg-secondary p-3 m-2" id="tenthsPlace" style={{borderRadius:"10px"}}>
				{digit2}
			</span>
           	
			<span className="digit1 bg-secondary p-3 m-2" id="onesPlace" style={{borderRadius:"10px"}}>
				{digit1}
			</span>
		</div>
	);
};


export default Home;