import './CartDetails.css';
import CartItem from "../cart-item/CartItem";

function CartDetails( { cart, getCartTotal, sumQuantity } ) {
  return (
    <div className="cart__details__container">
        <div>
            {cart.map( ( equipo ) => {
                    return <CartItem key={equipo.item.id} equipo={equipo} />;
            })}     
        </div>
        <h2 className="cart__details__text"><strong>{`Total (${sumQuantity} ítem${ sumQuantity > 1 ? "s" : "" }):`}</strong> <img className="moneda__img" src={`/moneda.svg`} alt="Moneda de oro" /> {getCartTotal}</h2>
    </div>
  );
}

export default CartDetails;