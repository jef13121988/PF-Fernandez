import './EquipoDetailContainer.css'
import { useParams } from 'react-router-dom';
import useEquiposById from '../../hooks/useEquiposById';
import EquipoDetail from "../equipo-detail/EquipoDetail";

function EquipoDetailContainer() {
    const { id } = useParams();
    const { equipo, isLoading } = useEquiposById( id );
    if ( isLoading ) return <h1> Cargando... </h1>;

    if ( !equipo ) return <h1> El producto solicitado no ha sido encontrado </h1>;

    return (
        <div>
            <h1> {equipo.categoria} / {equipo.subcategoria} </h1>
            <div className='equipo__detail__container'>
                <EquipoDetail equipo={ equipo } />
            </div>
        </div>
    )
}

export default EquipoDetailContainer;