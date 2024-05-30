import './EquipoContar.css';

function EquipoContar( { stock, contar, agregar, sacar } ) {
  
    return (
      <div className="equipo__contar__container"><strong>Cantidad: </strong>
        <button
            className="equipo__contar__button equipo__contar__text"
            onClick={ sacar }
            disabled={ contar <= 0 }>
            -
        </button>
        <span className="equipo__contar__text">{ contar }</span>
        <button
            className="equipo__contar__button equipo__contar__text"
            onClick={ agregar }
            disabled={ contar >= stock }>
            +
        </button>
      </div>
    );
}

export default EquipoContar;