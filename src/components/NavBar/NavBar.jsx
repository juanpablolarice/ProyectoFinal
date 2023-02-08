import React from 'react'
import './NavBar.css'

const NavBar = () => {
    const links = [
		{id: 1,title:'Inicio', link:'/'},
		{id: 2,title:'Electrónica', link:'/#'},
		{id: 3,title:'Hombre', link:'/#'},
		{id: 4,title:'Mujer', link:'/#'},
		{id: 5,title:'Joyas', link:'/#'}
	]
	
    return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
	  			<a className="navbar-brand" href="#"><img className="rounded-circle" width="30" height="30" src="images/logo.jpg" alt="" /></a>
	  			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
	  			</button>
	  			<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{links.map(link => <li key={link.id} className="nav-item"><a className="nav-link" href={link.link}>{link.title}</a></li>)}
					</ul>
  				</div>
			</div>
		</nav>
		// <div>navbar</div>
    )
}

export default NavBar