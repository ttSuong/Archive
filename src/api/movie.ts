import { MovieDto } from "../dto/Movie"

export const fetchMovies = (token: string) => {
	return fetch(`${process.env.REACT_APP_API_PREFIX}/movies`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token ? `Bearer ${token}` : ''
		}
	}).then(async response => {
		const responseObj: MovieDto[] = (await response.json());
		return responseObj;
	})
}


export const shareMovie = (sharedUrl: string, token: string) => {
	return fetch(`${process.env.REACT_APP_API_PREFIX}/movies`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token ? `Bearer ${token}` : ''
		},
		body: JSON.stringify({
			video_url: sharedUrl
		})
	}).then(async response => {
		const responseObj: MovieDto = (await response.json()).result;
		return responseObj;
	})
}

export const likeMovie = (movieId: number, status: string, token: string) => {
	return fetch(`${process.env.REACT_APP_API_PREFIX}/movies/reaction_movie`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token ? `Bearer ${token}` : ''
		},
		body: JSON.stringify({
			id: movieId,
			type_reaction: status
		})
	}).then(async response => {
		const responseObj: MovieDto = (await response.json()).result;
		return responseObj;
	})
}