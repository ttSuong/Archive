import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginDto } from "../dto/Auth";

const initialState = {
	token: '',
	email: ''
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess: (state, action: PayloadAction<LoginDto>) => {
			state.token = action.payload.access_token;
			state.email = action.payload.email;
		},
		logout: (state) => {
			state.token = '';
			state.email = '';
		}
	}
})

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;