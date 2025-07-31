import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
	return (
		<div className="p-6">
			<nav className="flex items-center justify-between">
				<Logo />
				<div className="flex items-center gap-4">
					{["about", "contact", "pricing"].map((link, index) => {
						return <Link key={index}>{link}</Link>;
					})}
				</div>
				<span>
					<MdMenu />
				</span>
				<div className="flex items-center gap-4">
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
		</div>
	);
};

export default Navbar;
