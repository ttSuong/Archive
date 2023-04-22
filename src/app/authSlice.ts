import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginDto } from "../dto/Auth";

const tokenKey = 'FUNNY-MOVIE-TOKEN';
const emailKey = 'FUNNY-MOVIE-EMAIL';

const initialState = {
	token: localStorage.getItem(tokenKey) ?? '',
	email: localStorage.getItem(emailKey) ?? ''
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess: (state, action: PayloadAction<LoginDto>) => {
			state.token = action.payload.access_token;
			state.email = action.payload.email;

			localStorage.setItem(tokenKey, state.token);
			localStorage.setItem(emailKey, state.email);
		},
		logout: (state) => {
			state.token = '';
			state.email = '';

			localStorage.setItem(tokenKey, state.token);
			localStorage.setItem(emailKey, state.email);
		}
	}
})

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;