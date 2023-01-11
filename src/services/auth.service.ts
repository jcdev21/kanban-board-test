import axios from 'axios';
import config from '../config';

type PayloadType = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};

export async function createUser(payload: PayloadType) {
	try {
		const res = await axios.post(`${config.baseUrlApi}/signup`, payload);
		return res.data;
	} catch (error) {
		return error;
	}
}

export async function login(
	payload: Omit<PayloadType, 'name' | 'password_confirmation'>
) {
	try {
		const res = await axios.post(
			`${config.baseUrlApi}/auth/login`,
			payload
		);
		return res.data;
	} catch (error) {
		return error;
	}
}
