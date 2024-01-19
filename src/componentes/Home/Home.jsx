import React from 'react';
import './Home.css';
import InfoJuego from '../InfoJuego/InfoJuego';
import appFirebase from '../../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import Header from '../Header/Header';
const auth = getAuth(appFirebase);

export default function Home({ correoUsuario, usuario }) {
	return (
		<div className='Home'>
			<Header/>
			{usuario ? (
				<>
					<h2>Bienvenido al Home Usuario {correoUsuario}</h2>
					<br />
				</>
			) : (
				''
			)}

			<div className='contenedor-juegos'>
				<InfoJuego />
				<InfoJuego />
				<InfoJuego />
				<InfoJuego />
				<InfoJuego />
				<InfoJuego />
				<InfoJuego />
				<InfoJuego />
				<InfoJuego />
			</div>
		</div>
	);
}
