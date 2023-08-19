import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxx-Hc_IkOATNXJaA2H0HusRRYkkNBe9Y",
  authDomain: "proyecto-react-e8642.firebaseapp.com",
  projectId: "proyecto-react-e8642",
  storageBucket: "proyecto-react-e8642.appspot.com",
  messagingSenderId: "133019519507",
  appId: "1:133019519507:web:c7f241300516219b7b0de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
