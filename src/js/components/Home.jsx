import React, {useEffect, useState} from "react";
// import Counter from "./Counter"



const Home = ({time}) => {
	const stringTime = time.toString()
	console.log(stringTime + 1);
	const digit1 = time < 10 ? stringTime[0] : stringTime[1]
	const digit2 = time < 10 ? "" : stringTime[0]
	// condition ? do this : do that
	// 0
	// 1
	// 2
	// 3
	// 4
	// 5
	// 6
	// 10
	// 13
	return (
		<div className="text-center">
			
			<span className="digit2 border bg-secondary p-3 m-2">
				{digit2}
			</span>
           <span className="digit1 border bg-secondary p-3 m-2">
				{digit1}
			</span>
		</div>
	);
};

export default Home;