import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './context/CartContext';
import { CartContext } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Checkout from './components/Checkout/Checkout';

function App() {
	// const [cart, setCart] = useContext([]);
	// <Route exact path="/" element={<ItemListContainer />}/> // greeting="Bienvenido a la tienda de GAIA"
	
	return (		
		<React.StrictMode>			
			<CartProvider value={CartContext}>
				<BrowserRouter>
					<NavBar/>	
					<Routes>
						<Route exact path="/" element={<ItemListContainer />}/>
						<Route exact path="/category/:category" element={<ItemListContainer/>}/>
						<Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
						<Route exact path="/checkout" element={<Checkout/>}/>
					</Routes>
					<Footer/>
				</BrowserRouter>
			</CartProvider>
		</React.StrictMode>
  	);
}

export default App;