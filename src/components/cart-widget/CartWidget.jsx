import './CartWidget.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartIcon from '../cart-icon/CartIcon';
import CartContext from "../../contexts/CartContext";

function CartWidget() {
    const { sumQuantity } = useContext(CartContext);

    return (
        <Link to={"/cart"}>
            <div className='cart__style'>
                <CartIcon size={'sm'} />
                <span className='cart__amount'>{sumQuantity}</span>
            </div>
        </Link>
    )
}

export default CartWidget;