const devServer = "http://localhost:4000";
const liveServer = "";

const authLinks = [
	{
		id: "notes",
		name: "notes",
		path: "/notes",
	},
	{
		id: "settings",
		name: "settings",
		path: "/settings",
	},
];

const unAuthLinks = [
	{
		id: "about",
		name: "about",
		path: "/about",
	},
	{
		id: "contact",
		name: "contact",
		path: "/contact",
	},
	{
		id: "pricing",
		name: "pricing",
		path: "/pricing",
	},
];

export { devServer, liveServer, unAuthLinks, authLinks };
