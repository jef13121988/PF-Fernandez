import './SingleContainer.css'
import { useParams } from 'react-router-dom';
import usePersonajesById from '../../hooks/usePersonajesById';
import Personaje from "../personaje/Personaje";

function SingleContainer() {
    const { id } = useParams();
    const { personaje, isLoading } = usePersonajesById( id );
    if ( isLoading ) return <h1> Cargando... </h1>;

    return (
        <div>
            <h1> Personaje n°{id} </h1>
            <div className='single__container'>
                <Personaje personaje={ personaje } />
            </div>
        </div>
    )
}

export default SingleContainer;