import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "./api/movie";
import { MovieDto } from "./dto/Movie";
import Movie, { MovieSkeleton } from "./Movie";

const Home: React.FC = () => {

	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState<MovieDto[]>([]);

	useEffect(() => {
		fetchMovies().then(response => {
			console.log('Tony', response);
			setMovies(response);
		}).finally(() => {
			setLoading(false)
		});
	}, [])

	return (
		<Grid container rowSpacing={4}>
			{loading && [...Array(3)].map((m, idx) => (
				<Grid item xs={12} key={idx}>
					<MovieSkeleton />
				</Grid>
			))}

			{!loading && movies.map(m => (
				<Grid item xs={12} key={m.id}>
					<Movie data={m} />
				</Grid>
			))}
		</Grid>
	)
}

export default Home;