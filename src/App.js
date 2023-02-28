import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  	return (
		<React.StrictMode>
			<BrowserRouter>
				<NavBar/>	
				<Routes>
					<Route exact path="/" element={<ItemListContainer greeting="Bienvenido a la tienda de GAIA"/>}/>
					<Route exact path="/category/:category" element={<ItemListContainer/>}/>
					<Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
				</Routes>
				<Footer/>
			</BrowserRouter>
		</React.StrictMode>
  	);
}

export default App;