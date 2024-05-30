import './EquipoDetail.css';

function EquipoDetail( { equipo } ) {
  
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
        <p className="equipo__detail__stock"><strong>Unidades disponibles:</strong> {equipo.stock}</p>
      </div>
    );
}

export default EquipoDetail;