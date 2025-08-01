import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to={"/"}>
			<h1 className="text-[18px] md:text-[22px] lg:text-[30px] font-semibold capitalize">
				notesapp
			</h1>
		</Link>
	);
};

export default Logo;
