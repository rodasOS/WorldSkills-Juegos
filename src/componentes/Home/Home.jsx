import React from 'react';
import './Home.css';
import appFirebase from '../../credenciales';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase);

export default function Home({ correoUsuario }) {
	return (
		<div className='Home'>
			<h2>Bienvenido Usuario {correoUsuario}</h2>
			<button
				onClick={() => {
					signOut(auth);
				}}>
				Cerrar sesión
			</button>
		</div>
	);
}
