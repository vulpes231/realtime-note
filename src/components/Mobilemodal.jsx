import React from "react";
import Navlinks from "./Navlinks";
import Navbuttons from "./Navbuttons";

const Mobilemodal = () => {
	return (
		<div className="absolute top-[70px] right-[15px] flex flex-col gap-10 bg-white shadow-sm p-6 rounded-[10px]">
			<Navlinks customClass={"flex flex-col gap-4"} />
			<Navbuttons customClass={"flex items-center gap-4"} />
		</div>
	);
};

export default Mobilemodal;
