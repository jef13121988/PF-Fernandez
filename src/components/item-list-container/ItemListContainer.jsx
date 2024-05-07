import { useParams } from 'react-router-dom';
import usePersonajesByClase from '../../hooks/usePersonajesByClase';
import PersonajeList from "../personaje-list/PersonajeList";

function ItemListContainer() {
    const { claseId } = useParams();
    const { personajes, isLoading } = usePersonajesByClase( claseId );
    if ( isLoading ) return <h1> Cargando... </h1>;

    return (
        <div>
            <h1> {claseId} </h1>
            <PersonajeList personajes={ personajes } />
        </div>
    )
}

export default ItemListContainer;