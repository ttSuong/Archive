import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "./api/movie";
import { MovieDto } from "./dto/Movie";
import Movie, { MovieSkeleton } from "./Movie";
import { useAppSelector } from "./app/hooks";

const Home: React.FC = () => {
	const token = useAppSelector(state => state.auth.token);
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState<MovieDto[]>([]);

	const onUpdate = (newData: MovieDto, idx: number) => {
		movies[idx] = {...newData};
		setMovies([...movies]);
	}

	useEffect(() => {
		fetchMovies(token).then(response => {
			setMovies(response);
		}).finally(() => {
			setLoading(false)
		});
	}, [token])

	return (
		<Grid container rowSpacing={4}>
			{loading && [...Array(3)].map((m, idx) => (
				<Grid item xs={12} key={idx}>
					<MovieSkeleton />
				</Grid>
			))}

			{!loading && movies.map((m, idx) => (
				<Grid item xs={12} key={m.id}>
					<Movie data={m} onUpdate={(newData) => onUpdate(newData, idx)} />
				</Grid>
			))}
		</Grid>
	)
}

export default Home;