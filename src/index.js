import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD304aQid_QCdxtecsvS0WCfC5_N939YMM",
  authDomain: "coderhouse-45701.firebaseapp.com",
  projectId: "coderhouse-45701",
  storageBucket: "coderhouse-45701.appspot.com",
  messagingSenderId: "357457171363",
  appId: "1:357457171363:web:74dd8baa86b971346f4016",
  measurementId: "G-KXQHCYB514"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
