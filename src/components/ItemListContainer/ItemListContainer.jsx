import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getDocs, getFirestore, collection, query, where, limit} from 'firebase/firestore'

const ItemListContainer = (props) => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);    
    

    useEffect(() => {
        const db = getFirestore()
        const productsRef = collection(db, 'items')

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
            })
        }
    }, [category])
    

    return (   
        <div className="container my-3">            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {products.map((product, index) => {
                    return (
                        <div className="col">
                            <div className="card h-100" key={product.id}>
                                <img src={product.image} className="card-img-top p-3" alt="..."/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description.slice(0, 70)}...</p>
                                </div>
                                <div className="card-footer text-center">
                                    <a href={"../item/" + product.id} className="btn btn-primary text-white">View details</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div> 
    )
}

export default ItemListContainer