import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext';
import Loader from '../Loader/Loader';

const ItemDetailContainer = (props) => {
    const { removeFromCart, addToCart } = useContext(CartContext)
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1)
    const [isLoading, setIsLoading] = useState(false);
    const isRunned = useRef(false);
    

    useEffect(() => {
        // Aca controlo que solo se cargue una vez
        if(isRunned.current) return;
        isRunned.current = true;
        setIsLoading(true)
        const db = getFirestore()
            const productRef = doc(db, 'items', id)
            getDoc(productRef).then( (snapshot) => {
                if(snapshot.size == 0){
                    console.log("No hay resultados")
                }
                setProduct({id: snapshot.id, ...snapshot.data()})
                setIsLoading(false)
            })
    }, [quantity])

    

    return (
        <>
            { isLoading ? <Loader/> : null }
            <div className="container my-3">
                <div className="row">
                    <div className="col-6 text-center">
                        <img src={product.image} alt="" className="img-fluid" />
                    </div>
                    <div className="col-6">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>                    
                        <p className="m-0"><strong>Stock: </strong>{product.stock}</p>
                        <h3 className="my-2"><strong>${product.price}</strong></h3>
                        <a href="#" className="btn" onClick={ () => setQuantity(quantity -1) }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                </svg>
                            </a>
                            <strong>{ quantity }</strong>
                            <a href="#" className="btn" onClick={() => setQuantity(quantity + 1) }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                            </a>                        
                        <a href="#" className="btn btn-checkout text-white mx-2" title="Add to cart" onClick={ () => addToCart(product, quantity) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </a> 
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemDetailContainer;