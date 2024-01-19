import React, { useState } from 'react';
import './Login.css';

import appFirebase from '../../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const auth = getAuth(appFirebase);

export default function Login() {
	const [registrando, setRegistrando] = useState(false);

	const autenticacion = async (e) => {
		e.preventDefault();

		const correo = e.target.email.value;
		const password = e.target.password.value;

		if (registrando) {
			try {
				await createUserWithEmailAndPassword(auth, correo, password);
			} catch (error) {
				alert('asegurese de que la contraseña sea mayor a 8 caracteres');
			}
		} else {
			try {
				await signInWithEmailAndPassword(auth, correo, password);
			} catch (error) {
				alert('El correo o la contraseña son incorrectas');
			}
		}
	};

	return (
		<div className='Login'>
			<div className='contenedor-login'>
				<form onSubmit={autenticacion}>
					<input type='text' placeholder='Email' id='email' className='input' />
					<input type='password' placeholder='Password' id='password' className='input' />
					<button>{registrando ? 'Registrarse' : 'Iniciar sesión'}</button>
				</form>
				<div className='resto'>
					<h4>{registrando ? 'Si ya tienes cuenta' : '¿No tienes cuenta?'}</h4>
					<button
						onClick={() => {
							setRegistrando(!registrando);
						}}>
						{registrando ? 'Iniciar sesión' : 'Registrate'}
					</button>
				</div>
			</div>
		</div>
	);
}
