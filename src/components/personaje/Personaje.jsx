import './Personaje.css';

function Personaje( { personaje } ) {
  
    return (
      <div className="personaje__container">
        <div className="personaje__img__container">
          <img className="personaje__img" src={`/personajes/${personaje.ruta}.jpg`} alt={personaje.ruta} />
        </div>
        <p className="personaje__text">Raza: {personaje.raza}</p>
        <p className="personaje__text">Clase: {personaje.clase}</p>
      </div>
    );
}

export default Personaje;