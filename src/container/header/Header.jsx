import "./Header.css"
import Brand from "../../components/brand/Brand";
import NavBar from "../../components/navbar/NavBar";

function Header() {
    return (
        <header className="header__style">
            <Brand />
            <NavBar />
        </header>
    )
}

export default Header;