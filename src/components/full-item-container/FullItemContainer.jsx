import { useParams } from 'react-router-dom';
import usePersonajes from '../../hooks/usePersonajes';
import PersonajeList from "../personaje-list/PersonajeList";

function FullItemContainer() {
    const { personajes, isLoading } = usePersonajes();
    if ( isLoading ) return <h1> Cargando... </h1>;

    return (
        <div>
            <h1> ¡Bienvenid@! </h1>
            <PersonajeList personajes={ personajes } />
        </div>
    )
}

export default FullItemContainer;