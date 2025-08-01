import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { Authnav, Navbar } from "./components";
import { Createnote, Dashboard, Settings, Signin, Signup } from "./pages";

const App = () => {
	const token = sessionStorage.getItem("token");
	return (
		<div>
			{!token ? <Navbar /> : <Authnav />}
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/create" element={<Createnote />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</div>
	);
};

export default App;
