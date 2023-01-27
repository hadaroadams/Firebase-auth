import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJYPtFsVHOvasipQ6pxUkhcO8QB_3uaJw",
  authDomain: "fir-auth-d56e3.firebaseapp.com",
  projectId: "fir-auth-d56e3",
  storageBucket: "fir-auth-d56e3.appspot.com",
  messagingSenderId: "833783046074",
  appId: "1:833783046074:web:88f57ad00fa40b9eeb8783",
  measurementId: "G-J823QLYF7J"
};

const app = initializeApp(firebaseConfig)

 export  const auth= getAuth(app)

