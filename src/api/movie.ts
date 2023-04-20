import { MovieDto } from "../dto/Movie"

export const fetchMovies = () => {
	return new Promise<MovieDto[]>((resolve) => {
		setTimeout(() => {
			resolve([
				{
					id: 1,
					name: 'ABC',
					email: 'abc@abc.com',
					description: 'abc xyz asidj asidj aiosdj asidj aiosdj aios',
					like: 50,
					dislike: 2,
					status: 1,
				},
				{
					id: 2,
					name: 'ABC',
					email: 'abc@abc.com',
					description: 'abc xyz asidj asidj aiosdj asidj aiosdj aios',
					like: 15,
					dislike: 32,
					status: 2,
				},
				{
					id: 3,
					name: 'ABC',
					email: 'abc@abc.com',
					description: 'abc xyz asidj asidj aiosdj asidj aiosdj aios',
					like: 1,
					dislike: 2,
					status: 0,
				}
			] as MovieDto[])
		}, 2000)
	})
}

export const likeMovie = (movieId: number, status: number, token: string) => {
	return new Promise(resolve => {
		resolve({})
	})
}