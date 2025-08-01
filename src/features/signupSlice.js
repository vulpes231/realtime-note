import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { devServer } from "../constants";

const initialState = {
	createUserLoading: false,
	createUserError: false,
	userCreated: false,
};

export const createUser = createAsyncThunk(
	"register/createUser",
	async (formData, { rejectWithValue }) => {
		try {
			const url = `${devServer}/signup`;
			const response = await axios.post(url, formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			return response.data;
		} catch (error) {
			return rejectWithValue({
				status: error.response?.status,
				message: error.response?.data?.message || error.message,
			});
		}
	}
);

const signupSlice = createSlice({
	name: "register",
	initialState,
	reducers: {
		resetSignup(state) {
			state.createUserError = false;
			state.createUserLoading = false;
			state.userCreated = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createUser.pending, (state) => {
				state.createUserLoading = true;
			})
			.addCase(createUser.fulfilled, (state) => {
				state.createUserLoading = false;
				state.createUserError = false;
				state.userCreated = true;
			})
			.addCase(createUser.rejected, (state, action) => {
				state.createUserLoading = false;
				state.createUserError = action.error.message;
				state.userCreated = false;
			});
	},
});

export const { resetSignup } = signupSlice.actions;
export default signupSlice.reducer;
