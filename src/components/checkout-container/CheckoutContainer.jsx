import './CheckoutContainer.css';
import { useContext } from "react";
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import CartContext from "../../contexts/CartContext";
import CartDetails from "../cart-details/CartDetails";
import useComprador from "../../hooks/useComprador";

function CheckoutContainer() {
    const { cart, clearCart, getCartTotal, sumQuantity } = useContext( CartContext );

    const { comprador, handleInputChange } = useComprador();

    const handleSubmit = async ( element ) => {
        element.preventDefault();

        const order = {
            comprador,
            cart,
            getCartTotal,
        };

        const db = getFirestore();

        for (const equipoCart of cart) {
            console.log(equipoCart.item.id)
            const equipoId = doc( db, "equipos", equipoCart.item.id.toString() );
            const equipo = await getDoc( equipoId );
            const equipoData = equipo.data();

            // Verifico que hay stock
            if ( equipoData.stock < equipoCart.quantity ) {
                alert(`No hay suficiente stock disponible para el producto ${ equipoData.nombre }`);
                alert(`Se cancela la compra`);
                // Return para finalizar sin cargar
                return;
            }
        }

        // La función continúa si hay stock
        const ordersCollection = collection( db, "orders" );

        addDoc( ordersCollection, order ).then(async ( { id } ) => {
            alert(`Compra realizada con éxito, el número de orden es: ${id}`);
            
            // Actualizo el stock en Firebase
            for (const equipoCart of cart) {
                const equipoId = doc( db, "equipos", equipoCart.item.id.toString() );
                const equipo = await getDoc(equipoId);
                const equipoData = equipo.data();

                const nuevoStock = equipoData.stock - equipoCart.quantity;

                await updateDoc( equipoId, { stock: nuevoStock } );
            }

            // Vacío el carrito
            clearCart();

        });
    };

    return (
        <div>
            <h1>Formulario de compra</h1>
            <form onSubmit={handleSubmit} className="form__style">
                <div className="checkout__container">
                    <div className="">
                        <label className="label__style" htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre del comprador"
                            className="input__style"
                            id="nombre"
                            name="nombre"
                            value={comprador.nombre}
                            onChange={handleInputChange}
                        />
                        <label className="label__style" htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            placeholder="Apellido del comprador"
                            className="input__style"
                            id="apellido"
                            name="apellido"
                            value={comprador.apellido}
                            onChange={handleInputChange}
                        />
                        <label className="label__style" htmlFor="telefono">Teléfono</label>
                        <input
                            type="text"
                            placeholder="Teléfono del comprador"
                            className="input__style"
                            id="telefono"
                            name="telefono"
                            value={comprador.telefono}
                            onChange={handleInputChange}
                        />
                        <label className="label__style" htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Reingrese su email"
                            className="input__style"
                            id="email"
                            name="email"
                            value={comprador.email}
                            onChange={handleInputChange}
                        />
                        <label className="label__style" htmlFor="emailControl">Repetir Email</label>
                        <input
                            type="email"
                            placeholder="Reingrese su email"
                            className="input__style"
                            id="emailControl"
                            name="emailControl"
                            value={comprador.emailControl}
                            onChange={handleInputChange}
                        />
                        { ( ( comprador.email != comprador.emailControl ) && ( comprador.email.length > 0 ) ) ? <p className="error__style"> El email no coincide </p> : <p className="error__style">   </p> }
                        <button
                            className="buy__button__style"
                            disabled={ comprador.nombre.length < 1 || comprador.apellido.length < 1 || comprador.telefono.length < 1 || comprador.email.length < 1 || comprador.email != comprador.emailControl }
                            type="submit"
                            >
                            Comprar
                        </button>
                    </div>
                    <CartDetails cart={cart} getCartTotal={getCartTotal} sumQuantity={sumQuantity} />
                </div>
            </form>
        </div>
    );
}

export default CheckoutContainer;