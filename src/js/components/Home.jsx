import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


const Home = ({time}) => {
	
	const digit6 = Math.floor(time / 100000) % 10;
	const digit5 = Math.floor(time / 10000) % 10;
	const digit4 = Math.floor(time / 1000) % 10; 
	const digit3 = Math.floor(time / 100) % 10; 
	const digit2 = Math.floor(time / 10) % 10; 
	const digit1 = time % 10
	
	return (
		<div className=" d-flex justify-content-center text-center bg-dark mt-5 mx-5" style={{height: "75px", borderRadius:"20px"}}>
			
			<span className="digit4 bg-secondary p-3 m-2" style={{borderRadius:"10px"}}>
			<FontAwesomeIcon className="fs-2" icon={faClock} style={{color: "white"}}/>
			</span>

			<span className="digit4 bg-secondary p-3 m-2" id="tenthsPlace" style={{borderRadius:"10px"}}>
				{digit6}
			</span>

			<span className="digit4 bg-secondary p-3 m-2" id="tenthsPlace" style={{borderRadius:"10px"}}>
				{digit5}
			</span>

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