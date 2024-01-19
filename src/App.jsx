import './App.css';
import { useState } from 'react';

//Importando los modulos de firebase
import appFirebase from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(appFirebase);

//Importando componentes
import Login from './componentes/Login/Login';
import Home from './componentes/Home/Home';

function App() {
	const [usuario, setUsuario] = useState(null);

	onAuthStateChanged(auth, (usuarioFirebase) => {
		if (usuarioFirebase) {
			setUsuario(usuarioFirebase);
		} else {
			setUsuario(null);
		}
	});

	return <div className='App'>{usuario ? <Home correoUsuario={usuario.email} /> : <Login />}</div>;
}

export default App;
