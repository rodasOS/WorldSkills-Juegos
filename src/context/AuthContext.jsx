import { useContext, createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebase/auth';

const AuthContext = createContext();

export const AuthContextProvider = (children) => {
	const [user, setUser] = useState({});
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsusbcribe = () => {
			onAuthStateChanged(auth, (currentUser) => {
				setUser(currentUser);
			});
		};

		return () => {
			unsusbcribe();
		};
	}, []);

	return <AuthContext.provider value={{ googleSignIn, logOut }}>{children}</AuthContext.provider>;
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
