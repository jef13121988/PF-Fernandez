import './CartWidget.css';
import CartIcon from '../cart-icon/CartIcon';

function CartWidget() {
    return (
        <div className='cart__style'>
            <CartIcon size={'sm'} />
            <span className='cart__amount'>5</span>
        </div>
    )
}

export default CartWidget;