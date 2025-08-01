import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Navlinks = ({ customClass, links }) => {
	const location = useLocation();

	return (
		<ul className={clsx("flex items-center", customClass)}>
			{links.map((link) => (
				<li key={link.id}>
					<Link
						to={link.path}
						className={clsx(
							"relative px-3 py-2 transition-colors duration-200",
							"text-gray-600 hover:text-indigo-600",
							"after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5",
							"after:bg-indigo-600 after:transition-all after:duration-300",
							"after:opacity-0 hover:after:opacity-100",
							{
								"text-indigo-600 after:opacity-100":
									location.pathname === link.path,
							}
						)}
					>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Navlinks;
