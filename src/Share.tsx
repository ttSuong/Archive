import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from "./app/hooks";
import { shareMovie } from "./api/movie";

const Share: React.FC = () => {
	const navigate = useNavigate()

	const [url, setUrl] = useState('');
	const token = useAppSelector(state => state.auth.token);

	const onBack = () => {
		navigate('/');
	}

	const onShareVideo = () => {
		shareMovie(url, token);
	}

	return (
		<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{height: 'calc(100vh - 60px)'}}>
			<Box p={3} sx={{borderRadius: '8px', border: 'solid 1px grey', width: '550px'}}>
				<Grid container alignItems='center' rowSpacing={2}>
					<Grid item xs={12} sm={12} md={4} lg={3}>
						Youtube URL
					</Grid>
					<Grid item xs={12} sm={12} md={8} lg={9}>
						<TextField autoFocus placeholder="Your url" variant="outlined" value={url} onChange={e => setUrl(e.target.value)} size='small' fullWidth />
					</Grid>
					<Grid item xs={12}>
						<Box display='flex' gap={2} justifyContent='center'>
							<Button color='primary' variant="contained" onClick={onShareVideo}>
								<ShareIcon /> {' '}
								Share
							</Button>
							<Button color='inherit' variant="contained" onClick={onBack}>
								<ArrowBackIcon />{' '}
								Back to home
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default Share;