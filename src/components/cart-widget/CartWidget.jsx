import './CartWidget.css'
import CartIcon from "../cart-icon/CartIcon";

function CartWidget() {
    return (
        <div className="cart--style">
            <CartIcon size={"sm"} />
            <span>5</span>
        </div>
    )
}

export default CartWidget;