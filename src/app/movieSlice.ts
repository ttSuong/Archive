import { createSlice } from "@reduxjs/toolkit";
import { MovieDto } from "../dto/Movie";

const initialState = {
	movie: [] as MovieDto[]
}

export const movieSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: { }
})

// export const { } = movieSlice.actions;

export default movieSlice.reducer;