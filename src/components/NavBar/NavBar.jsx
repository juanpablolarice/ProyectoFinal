import React, { useState, useEffect, useContext } from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { doc, getDoc, getDocs, getFirestore, collection } from 'firebase/firestore'

const NavBar = () => {			
	const [categories, setCategories] = useState([]);
	   
	useEffect(() => {
		const db = getFirestore()
		const categoriesRef = collection(db, 'categories')

		
		getDocs(categoriesRef).then((category) => {
			if(category === 0){
				console.log("No hay resultados")
			}
			setCategories(category.docs.map((categ) => ({ id: categ.id, ...categ.data() })))
		})
	}, [])
	
    return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img className="rounded-circle" width="40" height="40" src={process.env.PUBLIC_URL + "/images/brand.png"} alt="" />
				</a>
	  			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
	  			</button>
	  			<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li key={'home'} className="nav-item"><Link to={'/'} className="nav-link capitalize-first">Home</Link></li>
						<li className="nav-item dropdown">
          					<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            					Products
          					</a>
          					<ul className="dropdown-menu">            													
								{categories.map(category => <li key={category.id}><Link to={"category/" + category.id} className="dropdown-item capitalize-first">{category.name}</Link></li>)}
							</ul>
        				</li>
					</ul>
					<CartWidget />
  				</div>
			</div>
		</nav>
    )
}

export default NavBar