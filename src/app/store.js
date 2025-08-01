import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/navSlice";
import signinReducer from "../features/signinSlice";
import signupReducer from "../features/signupSlice";

const store = configureStore({
	reducer: {
		nav: navReducer,
		login: signinReducer,
		register: signupReducer,
	},
});

export default store;
