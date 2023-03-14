import React, { createContext, useState } from 'react';

// Definimos un CartContext
const CartContext = createContext()


// El componente CartProvider es el proveedor del contexto y es responsable de almacenar el estado del carrito de compras y de proporcionar las funciones necesarias para manipular ese estado.

const CartProvider = (props) => {
    // Creamos un estado para almacenar el estado del carrito de compras. Lo inicializamos como un arreglo vacio.
    const [cartItems, setCartItems] = useState([]);

    // FUNCIONES para manipular el estado del carrito:

    // 1) Vaciar carrito.
    const clearCart = () => {
        setCartItems([]);
    }

    // 2) Verificar si un producto ya está en el carrito.
    const isInCart = (id) => {
        return cartItems.find((product) => product.id === id) ? true : false;
    }

    // 3) Eliminar un producto del carrito.
    const removeProduct = (id) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id)
        setCartItems(newCartItems);
    }

    // 4) Agregar un producto al carrito.
    const addProduct =(item, quantity) =>{
        // Utilizamos la función 'isInCart' para ver si el producto ya está en el carrito.
        if(isInCart(item.id)){
            // Si ya está en el carrito, actualizamos la cantidad con .map
            setCartItems(cartItems.map(product =>{
                // Evaluamos si el 'id' del producto en el carrito coincide con el 'id' del nuevo producto que se va agregar
                // product.id === item.id ?
                //     // Se crea un nuevo objeto producto que tiene todas las propiedades del producto original pero con una cantidad actualizada.
                //     {...product , quantity: product.quantity + quantity} 
                // : 
                //     // Si los 'id' no coinciden, se devuelve el producto original sin cambios.
                //     product
            }));
        }else{
            // Si no está en el carrito, se agrega el nuevo producto al final del arreglo.
            setCartItems ([...cartItems, {...item, quantity}]);
        }
    }

    // 5) Obtener la cantidad total de productos en el carrito
    const getTotalQuantity = () => {
        let cant = 0
        // cart.forEach((e) => cant += e.quantity)
        return cant
    };

    // 6) Obtener el total del carrito en función de la cantidad y el precio de cada producto
    const getTotal = () => {
        let total = 0
        // cart.forEach((e) => total += (e.quantity*e.price))
        return total        
    };

    return (
        //  Por último utilamos el Context de React para proveer el estado del carrito y las funciones que lo manipulan a cualquier componente que se suscriba a este contexto. 
        // CartContext.Provider es un objeto que contiene los valores que se van a compartir con los componentes que se suscriban a este contexto.
        <CartContext.Provider value={{ cartItems, addProduct, removeProduct, clearCart, isInCart }}>
            {/* props.children hace referencia a los componentes hijos que se van a renderizar dentro del proveedor de contexto CartContext.Provider. */}
            {props.children}
        </CartContext.Provider>
    );
}

export { CartProvider }
export default CartContext;

// En resumen, esta parte del código permite a los componentes que se encuentren dentro del proveedor de contexto CartContext.Provider acceder al estado y funciones del carrito a través del hook useCartContext.

// En el código que hemos realizado se define un contexto llamado 'CartContext' que provee un estado para el carrito de compras y funciones para manipular ese estado. El componente CartProvider es el proveedor del contexto y es responsable de almacenar el estado del carrito de compras y proporcionar las funciones necesarias para manipular ese estado. 

// En resumen, el código permite a los componentes que se encuentren dentro del proveedor de contexto CartContext.Provider acceder al estado y funciones del carrito a través del hook useCartContext.
// import React, { createContext, useState } from 'react'

//     const CartContext = createContext ()

//     const CartProvider = ({ children }) => {

//         const [cartItems, setCartItems] = useState([])

//         // Vacio el carrito
//         const clearCart = () => {
//             setCartItems([])
//         }

//         // Verifico si existe el producto en el carrito
//         const isInCart = (id) => {
//             return cartItems.find((producto) => producto.id === id) ? true : false
//         }

//         // Elimino un producto del carrito
//         const removeProduct = (id) => {
//             const newCartItem = cartItems.filter((cartItem) => cartItems.id !== id)
//             setCartItems(newCartItem)
//         }

//         // Agregar producto al carrito
//         const addProduct = (item, quantity) => {
//             // Valido si el producto ya esta en el carrito
//             if(isInCart(item.id)){
//                 // Si esta en el carrito se actualiza la cantidad
//                 setCartItems(cartItems.map(product => {
//                     // valido que coincida el id del producto en el carrito con el nuevo producto que quiero agregar
//                     product.id === item.id ? 
//                         { ...product, quantity: product.quantity + quantity }
//                     :
//                         // Si los ID no coinciden se devuelve el producto original
//                         product
//                 }))
//             }else{
//                 //  Si no esta en el carrito se agrega el nuevo producto al final del arreglo
//                 setCartItems(...cartItems, {item, quantity})
//             }
//         }

//         // const getTotalQuantity = () => {
//         //     let total = 0
//         //     cartItems.forEach((item) => total += (item.quantity))
//         //     return total
//         // }

//         const data = { cartItems, addProduct, removeProduct, clearCart, isInCart };
        
//         return {
//             <h2>HOla</h2>
//             // por útlimo utilizamos e lcontext para proveer el estado del carrito y las funciones que lo manipulan a cualquier componente que lo consuma a este contexto.
//             // <CartContext.Provider value={ data }>
//             // children hacer referencia a los componentes hijos que se van a renderizar dentro del proveedor de nuestro contexto
//             // {children}
//             // </CartContext.Provider>
//         }
//     }

// export { CartProvider }
// export default CartContext;

// En resumen, esta parte del codigo permite a los componentes que se encuentren dentro del proveedor de contexto 'CartContext.Provider' 