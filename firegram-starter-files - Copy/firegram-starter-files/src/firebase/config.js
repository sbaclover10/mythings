// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhoV9qEzG452GYwpAxnjzMy_e5U6y772U",
  authDomain: "dailypablophoto.firebaseapp.com",
  projectId: "dailypablophoto",
  storageBucket: "dailypablophoto.appspot.com",
  messagingSenderId: "150115322143",
  appId: "1:150115322143:web:0f3350340c19e470a1882a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore();
const timestamp = serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
