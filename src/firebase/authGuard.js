import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

function checkAuth() {
    const userToken = localStorage.getItem('userToken');

    if (!userToken) {
        alert('Você precisa estar logado para acessar esta página.');
        window.location.href = "../../../project-root/public/index.html";
    }

    // Opcional: Validar token no backend ou decodificá-lo (usando biblioteca como jwt-decode)
}

document.addEventListener('DOMContentLoaded', checkAuth);

