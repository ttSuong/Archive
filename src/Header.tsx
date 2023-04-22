import { Box, Button, Container, TextField } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { login } from "./api/auth";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { loginSuccess, logout } from "./app/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const token = useAppSelector(state => state.auth.token);
	const loggedEmail = useAppSelector(state => state.auth.email);

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [logging, setLogging] = useState(false);

	const onLogin = () => {
		if (!email) {
			toast.error("Please enter your email");
			return;
		}

		if (!password) {
			toast.error("Please enter your password");
		}

		setLogging(true);
		login(email, password).then(response => {
			dispatch(loginSuccess(response));
		}).finally(() => {
			setLogging(false);
		})
	}

	const onNavigateToShare = () => {
		navigate('/share')
	}

	const onLogout = () => {
		dispatch(logout());
		onGoHome();
	}

	const onGoHome = () => {
		navigate('/')
	}

	return (
		<header>
			<Container>
				<Box display='flex' style={{ height: '60px' }}>
					{/* LOGO */}
					<Box display='flex' alignItems='center' sx={{cursor: 'pointer'}} onClick={onGoHome}>
						<HomeIcon fontSize="large" />
						FUNNY MOVIES
					</Box>

					<Box flexGrow={1}></Box>

					{!Boolean(token) && <Box display='flex' gap={1} alignItems='center'>
						<TextField placeholder="Email" variant="outlined" size='small' value={email} onChange={e => setEmail(e.target.value)} />
						<TextField placeholder="Password" type='password' variant="outlined" size='small' value={password} onChange={e => setPassword(e.target.value)} />
						<Button color='primary' variant="contained" onClick={onLogin} disabled={logging}>Login / Register</Button>
					</Box>}

					{Boolean(token) && <Box display='flex' gap={1} alignItems='center'>
						Welcome {loggedEmail}
						<Button color='primary' variant="contained" onClick={onNavigateToShare}>Share movie</Button>
						<Button color='inherit' variant="contained" onClick={onLogout}>Logout</Button>
					</Box>}
				</Box>
			</Container>
		</header>
	)
}

export default Header;