import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyC3tGyp8_-AAdwZ7R6PBiWehS9vi9tAYLw',
	authDomain: 'worldskills-juegos.firebaseapp.com',
	projectId: 'worldskills-juegos',
	storageBucket: 'worldskills-juegos.appspot.com',
	messagingSenderId: '208756285364',
	appId: '1:208756285364:web:30c9a555d21d69a44d1ce1',
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
export const auth = getAuth()
