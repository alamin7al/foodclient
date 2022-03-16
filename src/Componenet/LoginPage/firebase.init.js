import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confing";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebase