import axios from 'axios';
import config from '../config';
import useAuth from '../hooks/useAuth';

type PayloadType = {
	title: string;
	description: string;
};

export async function createTodo(
	accessToken: string | null,
	payload: PayloadType
) {
	try {
		const res = await axios.post(`${config.apiHost}/todos`, payload, {
			headers: {
				authorization: `Bearer ${accessToken}`,
			},
		});
		return res.data;
	} catch (error: any) {
		return {
			error: true,
			message: error?.message,
		};
	}
}

export async function getTodos(accessToken: string | null) {
	try {
		const res = await axios.get(`${config.apiHost}/todos`, {
			headers: {
				authorization: `Bearer ${accessToken}`,
			},
		});
		return res.data;
	} catch (error: any) {
		return {
			error: true,
			message: error?.message,
		};
	}
}

export async function getItems(accessToken: string | null, idTodo: number) {
	try {
		const res = await axios.get(`${config.apiHost}/todos/${idTodo}/items`, {
			headers: {
				authorization: `Bearer ${accessToken}`,
			},
		});
		return res.data;
	} catch (error: any) {
		return {
			error: true,
			message: error?.message,
		};
	}
}

export async function createItem(
	accessToken: string | null,
	idTodo: number,
	payload: PayloadType
) {
	try {
		const res = await axios.post(
			`${config.apiHost}/todos/${idTodo}/items`,
			payload,
			{
				headers: {
					authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return res.data;
	} catch (error: any) {
		return {
			error: true,
			message: error?.message,
		};
	}
}
