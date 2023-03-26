import React, { useState, useContext } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext';
import Loader from '../Loader/Loader';

const OrderForm = ({changeCheckout}) => {
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [buyerName, setBuyerName] = useState('');
    const [buyerPhone, setBuyerPhone] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');
    const [total, setTotal] = useState(0);
    const orderFormModal = document.getElementById('close-modal')
    const checkoutContainer = document.getElementById('checkoutContainer')
    const [isLoading, setIsLoading] = useState(false);

    // Instancia de firestore
    const db = getFirestore();

    // Referencia a la colección ordes para acceder a dicha colección.
    const ordersCollection = collection(db, 'orders');

    // Función para manejar el submit del form
    const handleSubmit = (e) => {
        e.preventDefault(); // Evitamos que el formulario se envié por si mismo.
        setIsLoading(true)
  
        // Objeto ‘order’ con la información del comprador, los ítems y su total.
        const order = {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            items: cart,
            total: getTotal()
        };

        // console.log(selectedItems);
        // Método ‘addDoc’ para agregar un nuevo documento con los datos de la orden. 
        addDoc(ordersCollection, order)
            .then((docRef) => {
                document.getElementById('close-modal').click();
                // console.log('Documento enviado. ID:', docRef.id);
                // checkoutContainer.innerHTML = "";
                // alert('¡Compra realizada con éxito!');
                resetForm();
                clearCart();
                const msg = 'Congrats'
                changeCheckout(true)
                setIsLoading(false)
                // document.getElementById("checkoutContainer").innerHTML = 'hasdasdasdtml';
                // checkoutContainer.innerHTML('<h3>Congratulations, your order was created correctly.</h3>');
            })
            .catch((e) => {
                console.log('Order fail', e);
                setIsLoading(false)
            });
    };

    // Función para manejar el seleccionado/deseleccionado de los checkbok
    // const handleSelectItem = (item) => {
    //     // Comprobamos si el elemento seleccionado está o no en la lista de elementos.
    //     const isSelected = selectedItems.includes(item);

    //     // Si no está seleccionado, se agrega a la lista de elementos y se agrega su precio al total.
    //     if (!isSelected) {
    //     setSelectedItems([...selectedItems, item]);
    //     setTotal(total + item.price);
    //     } else {
    //     // Si el elemento ya está seleccionado, al deseleccionar se elimina de la lista y se resta su precio total al total (total).
    //     const updatedSelectedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
    //     setSelectedItems(updatedSelectedItems);
    //     setTotal(total - item.price);
    //     }
    // };

    // Función para resetear el formulario luego de enviar
    const resetForm = () => {
        setBuyerName('');
        setBuyerPhone('');
        setBuyerEmail('');
        // setSelectedItems([]);
        setTotal(0);
    };

    return (
        <div class="modal" id="orderFormModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Order form</h5>
                        <button type="button" id="close-modal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="phone" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} />
                            </div>
                            <div className="row">
                                <div className="col-6 text-start">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                </div>
                                <div className="col-6 text-end">
                                    <button type="submit" class="btn btn-checkout">Proceed to checkout</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderForm