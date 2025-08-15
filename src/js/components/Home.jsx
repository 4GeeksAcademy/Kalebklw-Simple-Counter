import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './index.css'


const Home = ({time}) => {
	
	const digit6 = Math.floor(time / 100000) % 10;
	const digit5 = Math.floor(time / 10000) % 10;
	const digit4 = Math.floor(time / 1000) % 10; 
	const digit3 = Math.floor(time / 100) % 10; 
	const digit2 = Math.floor(time / 10) % 10; 
	const digit1 = time % 10
	
	return (
		// Main Body Of Clock
		<div className="body d-flex justify-content-center text-center bg-dark mt-5 mx-5">
			
			<span className="clockImgSpan digit4 bg-secondary p-3 m-2">
				<FontAwesomeIcon className="clockIcon fs-2" icon={faClock}/>
			</span>

			{/* Hundred Thousands Place */}
			<span className="digit6 bg-secondary p-3 m-2">
				{digit6}
			</span>

			{/* Ten Thousands Place */}
			<span className="digit5 bg-secondary p-3 m-2">
				{digit5}
			</span>

			{/* Thousands Place */}
			<span className="digit5 bg-secondary p-3 m-2">
				{digit4}
			</span>
			
			{/* Hundreds Place */}
			<span className="digit3 bg-secondary p-3 m-2">
				{digit3}
			</span>
			
			{/* Tenths Place */}
			<span className="digit2 bg-secondary p-3 m-2">
				{digit2}
			</span>
           	
			{/* Ones Place */}
			<span className="digit1 bg-secondary p-3 m-2">
				{digit1}
			</span>
		</div>
	);
};


export default Home;