import React from 'react';
import { AuthContext } from '../modules/auth/AuthContext';

export default function useAuth() {
	const context = React.useContext(AuthContext);

	if (!context) {
		throw Error(
			'useAuthContext must be used inside an AuthContextProvider'
		);
	}

	return context;
}
