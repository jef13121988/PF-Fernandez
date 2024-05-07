import './PersonajeList.css';
import Personaje from "../personaje/Personaje";
import { Link } from 'react-router-dom';

function PersonajeList( { personajes } ) {
  
    return (
        <div className="personaje__list__container">
            { personajes.map( ( personaje ) => (
                <Link to={`/personaje/${personaje.id}`}>
                    <Personaje key={ personaje.id } personaje={ personaje } />
                </Link>
            ))}
        </div>
    );
}

export default PersonajeList;