
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

// data of the project firebase
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTId
// };

const firebaseConfig = {
  apiKey: "AIzaSyCU_aCF8cAydnfaAUTXN1XW_TVyJ7aKC_o",
  authDomain: "auth-project-e9752.firebaseapp.com",
  projectId: "auth-project-e9752",
  storageBucket: "auth-project-e9752.appspot.com",
  messagingSenderId: "679499257152",
  appId: "1:679499257152:web:b6abdfade1c76a422b96a5",
  measurementId: "G-1GMBK4CPGV"
};


const app=initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;