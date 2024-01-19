import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../../credenciales';
// import { auth } from '../Login/Login';
const auth = getAuth(appFirebase);

export default function Header() {
	const [user, setUser] = useState(auth);
	return (
		<div className='Header'>
			<strong>WorlSkills : Juegos</strong>
			{/* {isLogin ? (
				<Link to='/login'>Acceder</Link>
			) : (
				<button
					onClick={() => {
						alert('Cerraste sesión')
						signOut(auth);
					}}>
					Cerrar sesión
				</button>
			)} */}
			{user ? (
				<button
					onClick={() => {
						alert('Cerraste sesión');
						const reset = () => {
							signOut(auth);
							setUser(false);	
						}

						reset()
					}}>
					Cerrar sesión
				</button>
			) : (
				<Link to='/login'>Acceder</Link>
			)}
		</div>
	);
}
