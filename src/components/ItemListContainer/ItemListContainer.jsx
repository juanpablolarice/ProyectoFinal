import React, { useState, useEffect } from 'react'

const ItemListContainer = (props) => {    
    return (
        <div className="container mt-3">
            <h3 className="text-center">
                {props.greeting}
            </h3>
        </div>
    )
}

export default ItemListContainer