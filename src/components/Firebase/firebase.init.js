import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// function for firebase initialize authentication
const initializeAuthentication = () => {

    initializeApp(firebaseConfig);
}

export default initializeAuthentication;