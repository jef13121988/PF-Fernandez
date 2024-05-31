import './EquipoDetail.css';
import { useContext } from "react";
import useContar from '../../hooks/useContar';
import EquipoContar from "../equipo-contar/EquipoContar";
import CartContext from "../../contexts/CartContext";

function EquipoDetail( { equipo } ) {
  const { contar, agregar, sacar, resetear } = useContar( 0 );
  const { addToCart, cartStockControl } = useContext( CartContext );
  
  const handleAddToCart = () => {
    addToCart( equipo, contar );
    resetear();  
  };

  return (
    <div className="equipo__detail">
      <div className="equipo__detail__img__container">
        <img className="equipo__detail__img" src={`/images/${equipo.ruta}.jpg`} alt={equipo.nombre} />
      </div>
      <h2 className="equipo__detail__title"> {equipo.nombre} </h2>
      <p className="equipo__detail__text"><strong>Características:</strong> otorga {equipo.valor} de {equipo.cualidad}.</p>
      <div >
          <p className="equipo__detail__description"><strong>Descripción:</strong> <i>{equipo.descripcion}</i></p>
      </div>
      <p className="equipo__detail__precio"><strong>Precio:</strong> <img className="moneda__img" src={`/moneda.svg`} alt="Moneda de oro" /> {equipo.precio}</p>
      <p className="equipo__detail__stock"><strong>Unidades disponibles:</strong> { equipo.stock - contar - cartStockControl( equipo ) }</p>
      <EquipoContar
        stock={ equipo.stock - cartStockControl( equipo ) }
        contar={ contar }
        agregar={ agregar }
        sacar={ sacar }
      />
      <div className="equipo__detail__cart__container">
        <button
          className="equipo__detail__cart"
          onClick={ handleAddToCart }
          disabled={ contar === 0 }
          type="button">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default EquipoDetail;