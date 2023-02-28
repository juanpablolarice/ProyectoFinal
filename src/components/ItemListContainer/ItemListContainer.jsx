import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        if(category) 
        {
            const url = 'https://dummyjson.com/products/category/' + category + '?limit=12';
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setProducts(data.products);
                })
            .catch((err) => {
                console.log(err.message);
            })
        }else{
            fetch('https://dummyjson.com/products?limit=12')
                .then((response) => response.json())
                .then((data) => {
                    setProducts(data.products);
                })
            .catch((err) => {
                console.log(err.message);
            });
        }
    }, [category])
    

    return (   
        <div className="container my-3">            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {products.map((product) => {
                    return (
                        <div className="col">
                            <div className="card h-100" key={product.id}>
                                <img src={product.thumbnail} className="card-img-top p-3" alt="..."/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
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