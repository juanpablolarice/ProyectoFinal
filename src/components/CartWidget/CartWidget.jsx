import React, { useContext, useState, useEffect } from 'react'
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = (props) => {
    const { cart, getTotal, getTotalQuantity, clearCart } = useContext(CartContext)
    const results = [];

    cart.forEach((product, index) => {
        results.push(
            <div className="notification-list" key={index}>  
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img className="img-fluid" src={ product.image } alt={ product.title }/>
                        </div>
                        <div className="col-9">
                            <p>{ product.title }</p>
                            <div className="row">
                                <div className="col-6">
                                    <p className="text-center mb-0"><strong>Quantity: </strong><br/>{product.quantity}</p>
                                </div>
                                <div className="col-6">
                                    <p className="text-center mb-0"><strong>Unit price: </strong><br/>${product.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    });
    
    return (
        <li className="nav-item dropdown notification-ui">
            <a className="nav-link dropdown-toggle notification-ui_icon" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                
                    { cart.length ? 
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                            </svg>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {getTotalQuantity()}
                                {/* <span className="visually-hidden">unread messages</span> */}
                            </span>
                        </>
                    :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    }
                {/* </button>  */}
            </a>
            <div className="dropdown-menu dropdown-menu-end notification-ui_dd" aria-labelledby="navbarDropdown">
                <div className="notification-ui_dd-header">
                    { cart.length != 0 ?
                        <h3 className="text-center">Shopping cart</h3>
                        :
                        <h3 className="text-center">Empty</h3>
                    }
                </div>
                <div className="notification-ui_dd-content">
                    {results}                    
                { cart.length > 0 ? 
                    <div className="notification-ui_dd-footer py-2 text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <p className="text-end pe-4">
                                        <i>Items:</i> <strong>{getTotalQuantity()}</strong><br/>
                                        <i>Total:</i> <strong>${getTotal()}</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#" className="btn btn-light btn-block" onClick={() => clearCart()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
                                            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                        </svg> Clear cart
                                        </a>
                                </div>
                                <div className="col-6">
                                    <Link to={'/checkout'} className="btn btn-checkout">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                        </svg> Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                ''
            }
            </div>
            </div>
        </li>
    )
}

export default CartWidget