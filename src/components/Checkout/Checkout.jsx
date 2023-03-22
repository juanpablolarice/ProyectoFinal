import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Checkout.css'
import { CartContext } from '../../context/CartContext';
import Loader from './../Loader/Loader'
import OrderForm from '../OrderForm/OrderForm';


const Checkout = () => {
    const { cart, addToCart, removeFromCart, getTotalQuantity, getTotal } = useContext(CartContext)
    const results = [];

    cart.forEach((product, index) => {
        results.push(            
            <div className="row border-bottom mx-3" key={index}>
                <div className="col-xl-2 col-3 text-center d-flex align-items-center p-3">
                    <img className="image-product img-fluid" src={ product.image } alt={ product.title }/>
                </div>
                <div className="col-xl-10 col-9">
                    <div className="row">
                        <div className="col-xl-6 col-md-12 d-flex align-items-center p-3">                    
                            <p className="text-start">
                                <strong>{ product.title }</strong><br/>
                                <i>{ product.description }</i>
                            </p>
                        </div>
                        <div className="col-xl-2 col-4 text-center d-flex align-items-center">
                            <p>
                            <a href="#" className="btn" onClick={() => addToCart(product, -1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                </svg>
                            </a>
                            <strong>{product.quantity}</strong>
                            <a href="#" className="btn" onClick={() => addToCart(product, 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                            </a>

                            </p>
                        </div>
                        <div className="col-xl-2 col-4 text-center d-flex align-items-center">
                            <p className="text-center"><strong>Unit price </strong><br/>${product.price}</p>
                        </div>
                        <div className="col-xl-2 col-4 text-center d-flex align-items-center">
                            <a href="#" className="btn mx-2" title="Delete from cart" onClick={() => removeFromCart(product.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#dc3545" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        );
    })
    
    return (       
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-6 text-start px-0 py-2">
                        <Link to={'/'} className="btn btn-continue-shopping capitalize-first">Continue Shopping</Link>
                    </div>
                    {/* <div className="col-6 text-end px-0 py-2">
                        <a href="#" className="btn btn-checkout">Checkout</a>
                    </div> */}
                </div>
            </div>
            <div className="container bg-white shadow-lg mb-3">
                {
                    results.length > 0 ?
                        <>                        
                            <div className="row border-bottom mx-3">
                                <div className="col-12 ps-0">
                                    <h3 className="py-2">Shopping cart</h3>
                                </div>
                            </div>
                            {results}
                            <div className="row py-4">
                                <div className="col-12">
                                    <p className="text-end pe-4">
                                        Items: {getTotalQuantity()}
                                    </p>
                                    <p className="text-end pe-4 pb-0">
                                        Total: ${getTotal()}
                                    </p>
                                </div>
                                <div className="col-12 text-end">
                                    <a href="#" className="btn btn-checkout" data-bs-toggle="modal" data-bs-target="#orderFormModal">Checkout</a>
                                </div>
                            </div>
                        </>
                    :
                    <div className="text-center text-body-tertiary py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        <h4 className="pt-2">Empty</h4>
                    </div>
                }
            </div>
            <OrderForm/>
        </> 
    )
}

export default Checkout