import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + id)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
            })
        .catch((err) => {
            console.log(err.message);
        });
    }, [])

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-6">
                    <img src={product.thumbnail} alt="" className="img-fluid" />
                </div>
                <div className="col-6">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p className="m-0"><strong>Brand: </strong>{product.brand}</p>
                    <p className="m-0"><strong>Stock: </strong>{product.stock}</p>
                    <h3 className="my-2"><strong>${product.price}</strong></h3>
                    <a href="" className="btn btn-primary mt-4">Add to cart</a>
                </div>
            </div>
        </div>
    )

}

export default ItemDetailContainer;