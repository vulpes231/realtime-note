import React from "react";
import { Link } from "react-router-dom";

const Navlinks = ({ customClass }) => {
	return (
		<div
			className={`${customClass} capitalize text-[14px] lg:text-[16px] font-medium`}
		>
			{["about", "contact", "pricing"].map((link, index) => {
				return <Link key={index}>{link}</Link>;
			})}
		</div>
	);
};

export default Navlinks;
