import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const db = getFirestore()
            const productRef = doc(db, 'items', id)
            getDoc(productRef).then( (snapshot) => {
                if(snapshot.size == 0){
                    console.log("No hay resultados")
                }
                setProduct({id: snapshot.id, ...snapshot.data()})
            })
    }, [])

    return (
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
                    <a href="#" className="btn btn-primary mt-4">Add to cart</a>
                </div>
            </div>
        </div>
    )

}

export default ItemDetailContainer;