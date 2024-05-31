import { useState, useEffect } from "react";
import CartContext from "./CartContext";

function CartProvider( { children } ) {
    // Busco si hay un carrito en local storage
    const [ cart, setCart ] = useState( localStorage.getItem( "cart" ) ? JSON.parse(localStorage.getItem( "cart" )) : [] );

    // Función para agregar productos al carrito
    const addToCart = ( item, quantity ) => {
        // Función para idenfiticar si el producto se encuentra en el carrito
        const inCart = cart.find( ( equipo ) => equipo.item.id === item.id);
    
        if ( inCart ) {
            // Si el producto ya se encuentra en el carrito, le actualizo la cantidad
            const updateCart = cart.map( ( equipo ) => {
                if ( equipo.item.id === item.id) {
                    return { item, quantity: equipo.quantity + quantity };
                }

                return equipo;

            });
            
            setCart( updateCart );

        } else {
            // Si el producto no se encuentra en el carrito, lo agrego
            setCart( [ ...cart, { item, quantity } ] );
        }

    };

    // Subo el carrito a local storage
    useEffect( () => { localStorage.setItem( "cart", JSON.stringify( cart ) ) }, [ cart ] );

    // Función para sacar productos del carrito
    const removeFromCart = ( item, quantity ) => {
        // Función para idenfiticar si el producto se encuentra en el carrito
        const inCart = cart.find( ( equipo ) => equipo.item.id === item.id );

        if ( inCart ) {
            // Reviso si el producto ya se encuentra en el carrito y le actualizo la cantidad
            const updateCart = cart.map( ( equipo ) => {
                if ( equipo.item.id === item.id ) {
                    return { item: equipo.item, quantity: equipo.quantity - quantity };
                }

                return equipo;

            });
    
            // Remuevo los elementos con cantidad = 0
            const removeEmptyCart = updateCart.filter( ( equipo ) => equipo.quantity > 0 );
    
            setCart( removeEmptyCart );
        }
    };

    // Función para vaciar el carrito
    const clearCart = () => { setCart( [] ) };

    // Función para totalizar el carrito
    const getCartTotal = cart.reduce( ( acumulado, equipo ) => acumulado + equipo.item.precio * equipo.quantity, 0);

    // Función para revisar stock de productos en el carrito
    const cartStockControl = ( item ) => {
        // Función para idenfiticar si el producto se encuentra en el carrito
        const inCart = cart.find( ( equipo ) => equipo.item.id === item.id);
    
        if ( inCart ) {
            // Si el producto ya se encuentra en el carrito, identifico la cantidad
            return inCart.quantity;
            
        } else {
            return 0;
        }

    };

    // Función para sumar el stock de productos en el carrito
    const sumQuantity = cart.reduce( ( acumulado, equipo ) => acumulado + equipo.quantity, 0);

    return (
        <CartContext.Provider
            value={ { cart, addToCart, removeFromCart, clearCart, getCartTotal, cartStockControl, sumQuantity } }
        >
            {children}
        </CartContext.Provider>
        
    );

}

export default CartProvider;