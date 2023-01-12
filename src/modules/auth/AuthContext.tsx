import React from 'react';

type AuthStateType = {
	accessToken: string | null;
};

type ActionType = { type: 'LOGIN'; payload: AuthStateType };

type AuthContextStateType = AuthStateType & {
	dispatch: React.Dispatch<ActionType>;
};

const initialState = {
	accessToken: null,
} as AuthContextStateType;

export const AuthContext =
	React.createContext<AuthContextStateType>(initialState);

const authReducer = (state: AuthStateType, action: ActionType) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, accessToken: action.payload.accessToken };

		default:
			return state;
	}
};

export default function AuthProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [state, dispatch] = React.useReducer(authReducer, initialState);

	React.useEffect(() => {
		const accessToken = JSON.parse(
			localStorage.getItem('access-token') as string
		);

		if (accessToken) {
			dispatch({
				type: 'LOGIN',
				payload: { accessToken },
			});
		}
	}, []);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
}
