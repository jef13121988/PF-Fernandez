import './CartWidget.css'
import CartIcon from "../cart-icon/CartIcon";

function CartWidget() {
    return (
        <div className="cart--style">
            <CartIcon size={"sm"} />
            <span className='cart--amount--style'>5</span>
        </div>
    )
}

export default CartWidget;