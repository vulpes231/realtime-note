import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendError } from "../constants";
import axios from "axios";

const initialState = {
	signinLoading: false,
	signinError: false,
	token: false,
};

export const signinUser = createAsyncThunk(
	"signin/signinUser",
	async (formData) => {
		try {
			const url = "";
			const response = await axios.post(url, formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			return response.data;
		} catch (error) {
			sendError(error);
		}
	}
);

const signinSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		resetSignin(state) {
			state.signinError = false;
			state.signinLoading = false;
			state.token = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signinUser.pending, (state) => {
				state.signinLoading = true;
			})
			.addCase(signinUser.fulfilled, (state, action) => {
				state.signinLoading = false;
				state.signinError = false;
				state.token = action.payload.accessToken;
			})
			.addCase(signinUser.rejected, (state, action) => {
				state.signinLoading = false;
				state.signinError = action.error.message;
				state.token = false;
			});
	},
});

export const { resetSignin } = signinSlice.actions;
export default signinSlice.reducer;
