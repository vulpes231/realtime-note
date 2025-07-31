import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Mobilemodal from "./Mobilemodal";
import { setToggle } from "../features/navSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const { toggle } = useSelector((state) => state.nav);
	return (
		<div className="p-6 fixed top-0 left-0 w-full h-[70px]">
			<nav className="flex items-center justify-between">
				<Logo />
				<div className="hidden lg:flex items-center gap-4 ">
					{["about", "contact", "pricing"].map((link, index) => {
						return <Link key={index}>{link}</Link>;
					})}
				</div>
				<button
					onClick={() => dispatch(setToggle())}
					className="lg:hidden w-8 h-8"
				>
					{!toggle ? <MdMenu /> : <MdClose />}
				</button>
				<div className="hidden lg:flex items-center gap-4">
					{[
						{ id: "login", name: "sign in", path: "/signin" },
						{ id: "register", name: "sign up", path: "/signup" },
					].map((link) => {
						return (
							<Link
								className={`${
									link.id === "login"
										? " bg-black text-white"
										: "border border-black"
								} h-[40px] w-[89px] rounded-[5px] capitalize flex items-center justify-center`}
								to={link.path}
								key={link.id}
							>
								{link.name}
							</Link>
						);
					})}
				</div>
			</nav>
			{toggle && <Mobilemodal />}
		</div>
	);
};

export default Navbar;
