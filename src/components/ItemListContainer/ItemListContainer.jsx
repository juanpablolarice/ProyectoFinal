import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link, NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { doc, getDoc, getDocs, getFirestore, collection, query, where, limit} from 'firebase/firestore'
import { CartContext } from '../../context/CartContext';
import Loader from '../Loader/Loader';

const ItemListContainer = (props) => {
    const { addToCart, removeFromCart} = useContext(CartContext)
    const { category } = useParams();
    const [products, setProducts] = useState([]);    
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        const db = getFirestore()
        const productsRef = collection(db, 'items')
        setIsLoading(true)

        if(category) 
        {
            const q = query(productsRef,
                where("categoryId", "==", category)
            )          
           
            getDocs(q).then((snapshot) => {
                if(snapshot === 0){
                  console.log("No hay resultados")
                }
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setIsLoading(false)
            })
        }else{
            const q = query(productsRef,
                limit(8)
            )          
           
            getDocs(q).then((snapshot) => {
                if(snapshot === 0){
                  console.log("No hay resultados")
                }
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                setIsLoading(false)
            })
        }
    }, [category])
    

    return ( 
        <>
            { isLoading ? <Loader/> : null }
            <div className="container my-3">            
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {products.map((product, index) => {
                        return (
                            <div className="col">
                                <div className="card h-100 shadow" key={product.id}>
                                    <img src={product.image} className="card-img-top img-resize p-3" alt="..."/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{ product.description.slice(0, 40) }...</p>
                                    </div>
                                    <div className="card-footer text-center">
                                        <Link to={"../item/" + product.id} className="btn btn-light mx-2" title="View details">View details</Link>
                                        <a href="#" className="btn btn-checkout text-white mx-2" title="Add to cart" onClick={() => addToCart(product, 1)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                            </svg>
                                        </a>                                    
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div> 
        </>  
    )
}

export default ItemListContainer