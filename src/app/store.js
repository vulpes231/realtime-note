import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/navSlice";
import signinReducer from "../features/signinSlice";

const store = configureStore({
	reducer: {
		nav: navReducer,
		login: signinReducer,
	},
});

export default store;
