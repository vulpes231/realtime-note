import React from "react";
import { Link } from "react-router-dom";
import { setToggle } from "../features/navSlice";
import { useDispatch } from "react-redux";

const Navbuttons = ({ customClass }) => {
	const dispatch = useDispatch();
	return (
		<div className={customClass}>
			{[
				{ id: "login", name: "sign in", path: "/signin" },
				{ id: "register", name: "sign up", path: "/signup" },
			].map((link) => {
				return (
					<Link
						onClick={(e) => {
							e.preventDefault();
							window.location.href = link.path;
							dispatch(setToggle());
						}}
						className={`${
							link.id === "login"
								? " bg-black text-white hover:bg-black/80"
								: "border border-black hover:bg-black hover:text-[#fff] "
						} h-[40px] w-[89px] rounded-[5px] capitalize flex items-center justify-center text-[14px] lg:text-[16px]`}
						// to={link.path}
						key={link.id}
					>
						{link.name}
					</Link>
				);
			})}
		</div>
	);
};

export default Navbuttons;
