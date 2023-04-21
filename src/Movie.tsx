import { Box, Container, IconButton, Skeleton, Typography } from "@mui/material";
import { MovieDto } from "./dto/Movie";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { MovieLikeStatus } from "./consts";
import { useAppSelector } from "./app/hooks";
import { likeMovie } from "./api/movie";

type MovieProps = {
	data: MovieDto;
}

const Movie: React.FC<MovieProps> = ({ data }) => {
	const token = useAppSelector(state => state.auth.token);

	const onLikeMovie = (movieId: number, status: string) => {
		likeMovie(movieId, status, token);
	}

	return (
		<Container>
			<Box display='flex' gap={3} flexWrap='nowrap'>
				<Box flexBasis='450px'>
					<iframe width='450' height='250' src={data.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
				</Box>
				<Box flexGrow={1}>
					<Box>
						<Typography variant='h5' style={{color: 'red'}}>
							{data.title}
						</Typography>
					</Box>
					<Box>Shared by: {data.shared_by}</Box>
					<Box display='flex' alignItems='center' gap={2}>
						<Box display='flex' alignItems='center'>
							<Typography variant="subtitle2">
								{data.total_liked}
							</Typography>
							<IconButton size='small' disabled={!token} onClick={() => onLikeMovie(data.id, data.status === MovieLikeStatus.LIKED ? MovieLikeStatus.UNSET : MovieLikeStatus.LIKED)}>
								<ThumbUpIcon color={data.status === MovieLikeStatus.LIKED ? 'primary' : 'inherit'}/>
							</IconButton>
						</Box>

						<Box display='flex' alignItems='center'>
							<IconButton size='small' disabled={!token} onClick={() => onLikeMovie(data.id, data.status === MovieLikeStatus.DISLIKED ? MovieLikeStatus.UNSET : MovieLikeStatus.DISLIKED)}>
								<ThumbDownIcon color={data.status === MovieLikeStatus.DISLIKED ? 'error' : 'inherit'} />
							</IconButton>
							<Typography variant="subtitle2">
								{data.total_disliked}
							</Typography>
						</Box>
					</Box>
					<Box>
					<Typography variant='body2'>
					Description: 
						</Typography>

						<Typography variant='body2'>
							{data.description}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Container>
	)
}

export const MovieSkeleton: React.FC = () => {
	return (
		<Container>
			<Box display='flex' gap={3} flexWrap='wrap'>
				<Box flexBasis='450px'>
					<Skeleton variant="rectangular" width={450} height={250} />
				</Box>
				<Box flexGrow={1}>
					<Skeleton variant='text' width='50%' />
					<Skeleton variant='text' />
					<Skeleton variant='text' width='25%' />
					<Box mt={1}>
						<Skeleton variant='rectangular' height={100} />
					</Box>
				</Box>
			</Box>
		</Container>
	)
}

export default Movie;