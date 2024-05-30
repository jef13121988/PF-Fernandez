import './Equipo.css';

function Equipo( { equipo } ) {
  
    return (
      <div className="equipo__container">
        <div className="equipo__img__container">
          <img className="equipo__img" src={`/images/${equipo.ruta}.jpg`} alt={equipo.nombre} />
        </div>
        <p className="equipo__text">Subcategoría: {equipo.subcategoria}</p>
        <p className="equipo__text">Nombre: {equipo.nombre}</p>
      </div>
    );
}

export default Equipo;