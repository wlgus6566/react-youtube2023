import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider, onAuthStateChanged  } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOGGLE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});
export function login() {
    signInWithPopup(auth, provider)
        .catch(console.error);
}

export function logout() {
    signOut(auth)
        .catch(console.error);
}

export function onUserStateChange(callback){
    onAuthStateChanged(auth, (user) => {
        callback(user);
    });
}