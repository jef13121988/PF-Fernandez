import './CartContainer.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import CartDetails from "../cart-details/CartDetails";

function CartContainer() {
    const { cart, clearCart, getCartTotal, sumQuantity } = useContext(CartContext);

    return (
        <div>
            <div>
                <h1>Carrito</h1>
                { cart.length === 0
                    ? <h2 className="cart__container__h2">No han sido agregados productos al carrito</h2>
                    : <CartDetails cart={cart} getCartTotal={getCartTotal} sumQuantity={sumQuantity} />
                }
            </div>         
            <div className="cart__container__buttons">
                { cart.length > 0
                    ? (<>
                        <button
                            className="vaciar__carrito"
                            onClick={clearCart}
                            type="button">
                            Vaciar carrito
                        </button>
                        <Link to="/checkout" className="">
                        <button
                            className="finalizar__compra"
                            type="button">
                            Finalizar Compra
                        </button>
                        </Link>
                    </>)
                    : <></>
                }                
            </div>
        </div>
    );
}

export default CartContainer;