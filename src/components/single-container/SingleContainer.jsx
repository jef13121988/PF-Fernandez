import './SingleContainer.css'
import { useParams } from 'react-router-dom';
import useEquiposById from '../../hooks/useEquiposById';
import Equipo from "../equipo/Equipo";

function SingleContainer() {
    const { id } = useParams();
    const { equipo, isLoading } = useEquiposById( id );
    if ( isLoading ) return <h1> Cargando... </h1>;

    return (
        <div>
            <h1> Equipo n°{id} </h1>
            <div className='single__container'>
                <Equipo equipo={ equipo } />
            </div>
        </div>
    )
}

export default SingleContainer;