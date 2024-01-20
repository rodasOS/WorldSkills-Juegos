import './App.css';
import { useState } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Error from './componentes/404/404.jsx';
// import { AuthContextProvider, UserAuth } from './context/AuthContext';

//Importando los modulos de firebase
import appFirebase from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(appFirebase);

//Importando componentes
import Login from './componentes/Login/Login';
import Home from './componentes/Home/Home';

function App() {
	const [usuario, setUsuario] = useState(false);

	onAuthStateChanged(auth, (usuarioFirebase) => {
		if (usuarioFirebase) {
			setUsuario(usuarioFirebase);
		} else {
			setUsuario(null);
		}
	});

	return (
		<HashRouter>
			{/* <div className='App'>{usuario ? <Home correoUsuario={usuario.email} /> : <Login />}</div> */}
			{usuario ? <Navigate to='/' replace={true} /> : ''}
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home correoUsuario={usuario ? usuario.email : ''} usuario={usuario} />} />
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</div>
		</HashRouter>
	);
}

export default App;
