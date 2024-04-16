import './NavBar.css'
import CategoryList from "../category-list/CategoryList";
import CartWidget from "../cart-widget/CartWidget";

function NavBar() {
    return (
        <div className="navbar__style">
            <CategoryList />
            <CartWidget />
        </div>
    )
}

export default NavBar;