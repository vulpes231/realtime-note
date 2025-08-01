import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	const token = sessionStorage.getItem("token");
	return (
		<Link to={!token ? "/" : "/dashboard"}>
			<h1 className="text-[18px] md:text-[22px] lg:text-[30px] font-semibold capitalize">
				neuraljot
			</h1>
		</Link>
	);
};

export default Logo;
