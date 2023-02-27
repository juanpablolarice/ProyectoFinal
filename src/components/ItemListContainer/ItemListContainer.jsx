import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const { category } = useParams();
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        if(category) 
        {
            const url = 'https://dummyjson.com/products/category/' + category + '?limit=12';
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setProductos(data.products);
                })
            .catch((err) => {
                console.log(err.message);
            })
        }else{
            fetch('https://dummyjson.com/products?limit=12')
                .then((response) => response.json())
                .then((data) => {
                    setProductos(data.products);
                })
            .catch((err) => {
                console.log(err.message);
            });
        }
    }, [category])
    

    return (   
        <div className="container">            
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {productos.map((producto) => {
                    return (
                        <div className="col">
                            <div className="card h-100" key={producto.id}>
                                <img src={producto.thumbnail} className="card-img-top p-3" alt="..."/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{producto.title}</h5>
                                    <p className="card-text">{producto.description}</p>
                                </div>
                                <div className="card-footer text-center">
                                    <a href="#" className="btn btn-primary text-white">Ver detalle</a>
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