import React from "react";
import { authLinks } from "../constants";
import Navlinks from "./Navlinks";

const Authmodal = () => {
	return (
		<div className="absolute top-[70px] right-[15px] flex flex-col gap-10 bg-white shadow-sm p-6 rounded-[10px]">
			<Navlinks links={authLinks} customClass={"flex flex-col gap-4"} />
		</div>
	);
};

export default Authmodal;
