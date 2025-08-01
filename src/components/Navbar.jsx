import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Mobilemodal from "./Mobilemodal";
import { setToggle } from "../features/navSlice";
import Navlinks from "./Navlinks";
import Navbuttons from "./Navbuttons";
import { unAuthLinks } from "../constants";

const Navbar = () => {
	const dispatch = useDispatch();
	const { toggle } = useSelector((state) => state.nav);

	return (
		<div className="p-6 fixed top-0 left-0 h-[70px] bg-white flex items-center justify-center w-full">
			<nav className="flex items-center justify-between w-full">
				<Logo />
				<Navlinks
					links={unAuthLinks}
					customClass={"hidden lg:flex items-center gap-4"}
				/>

				<button
					onClick={(e) => {
						e.stopPropagation();
						dispatch(setToggle());
					}}
					className="lg:hidden "
				>
					{!toggle ? (
						<MdMenu className="w-6 h-6" />
					) : (
						<MdClose className="w-6 h-6" />
					)}
				</button>
				<Navbuttons customClass={"hidden lg:flex items-center gap-4"} />
			</nav>
			{toggle && <Mobilemodal />}
		</div>
	);
};

export default Navbar;
