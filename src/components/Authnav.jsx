import React from "react";
import Logo from "./Logo";
import { authLinks } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setToggle } from "../features/navSlice";
import Navlinks from "./Navlinks";
import { MdClose, MdMenu } from "react-icons/md";
import Authmodal from "./Authmodal";
import { FiUser } from "react-icons/fi";

const Authnav = () => {
	const dispatch = useDispatch();
	const { toggle } = useSelector((state) => state.nav);
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all ${
				isScrolled ? "bg-white shadow-sm" : "bg-white/95 backdrop-blur-sm"
			}`}
		>
			<div className="container mx-auto px-6">
				<nav className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center">
						<Logo />
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						<Navlinks
							links={authLinks}
							customClass="flex items-center space-x-8"
						/>
					</div>

					{/* Mobile Menu Button */}
					<div className="lg:hidden flex items-center">
						<button
							onClick={(e) => {
								e.stopPropagation();
								dispatch(setToggle());
							}}
							className="p-2 rounded-lg hover:bg-gray-100 transition"
							aria-label="Toggle menu"
						>
							{!toggle ? (
								<MdMenu className="w-6 h-6 text-gray-700" />
							) : (
								<MdClose className="w-6 h-6 text-gray-700" />
							)}
						</button>
					</div>
				</nav>
			</div>

			{/* Auth Modal */}
			{toggle && <Authmodal />}
		</header>
	);
};

export default Authnav;
