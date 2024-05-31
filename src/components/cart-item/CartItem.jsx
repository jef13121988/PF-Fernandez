import "./CartItem.css";
import "../equipo-contar/EquipoContar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";

function CartItem( { equipo } ) {
    const { addToCart, removeFromCart  } = useContext( CartContext );

    return (
        <div className="cart__item__container">
            <div className="cart__item__img__container">
                <Link to={`/equipamiento/${equipo.item.id}`}>
                    <img className="cart__item__img" src={`/images/${equipo.item.ruta}.jpg`} alt={equipo.item.nombre} />
                </Link>
            </div>
            <div className="cart__item__text__container">
                <h2 className="cart__item__title">{equipo.item.nombre}</h2>
                <div className="equipo__contar__container"><strong>Cantidad: </strong>
                    <button
                        className="equipo__contar__button equipo__contar__text"
                        onClick={ () => removeFromCart( equipo.item, 1 ) }
                        type="button">
                        -
                    </button>
                    <span className="equipo__contar__text">{equipo.quantity}</span>
                    <button
                        className="equipo__contar__button equipo__contar__text"
                        onClick={ () => addToCart( equipo.item, 1 ) }
                        disabled={ equipo.quantity >= equipo.item.stock }
                        type="button">
                        +
                    </button>
                </div>
                <p className="equipo__contar__text"><strong>Precio:</strong> <img className="cart__moneda__img" src={`/moneda.svg`} alt="Moneda de oro" /> {equipo.item.precio}</p>
                <button
                    className="cart__item__remove"
                    onClick={ () => removeFromCart( equipo.item, equipo.quantity ) }
                    type="button">
                    Remover Ítem
                </button>
            </div>
        </div>
    );
}

export default CartItem;