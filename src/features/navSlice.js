import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	toggle: false,
};

const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		setToggle(state) {
			state.toggle = !state.toggle;
		},
	},
});

export const { setToggle } = navSlice.actions;
export default navSlice.reducer;
