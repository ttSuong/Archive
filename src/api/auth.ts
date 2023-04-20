import { LoginDto } from "../dto/Auth";

export const login = (email: string, password: string) => {
	return fetch(`${process.env.REACT_APP_API_PREFIX}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: email,
			password: password,
			client_id: process.env.REACT_APP_API_CLIENT_ID
		})
	}).then(async response => {
		const responseObj: LoginDto = (await response.json()).result;
		return responseObj;
	})
}
