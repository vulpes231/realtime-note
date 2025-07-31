import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { Navbar } from "./components";
import { Signin, Signup } from "./pages";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
};

export default App;
