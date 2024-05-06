import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './Personaje.css';

function Personaje() {
    const { id } = useParams();
    const [ personaje, setPersonaje ] = useState(null);

    console.log(id)

    useEffect(() => {
        fetch( '/data.json',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then((response) => response.json())
        .then((data) => setPersonaje(data.imagenes[id-1]));
    }, []);
  
    return (
      <div className="personaje__container">
        <p className="personaje__text">Raza: {personaje?.raza}</p>
        <p className="personaje__text">Clase: {personaje?.clase}</p>
        <img className="personaje__img" src={`../personajes/${personaje?.ruta}.jpg`} alt={personaje?.ruta} />
      </div>
    );
}

export default Personaje;