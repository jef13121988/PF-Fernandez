import { useParams } from 'react-router-dom';
import useEquipos from '../../hooks/useEquipos';
import EquipoList from "../equipo-list/EquipoList";

function EquipoListContainer() {
    const { categoryId } = useParams();
    const { equipos, isLoading } = useEquipos( categoryId );
    if ( isLoading ) return <h1> Cargando... </h1>;

    return (
        <div>
            <h1> {categoryId ? categoryId : "Inicio"} </h1>
            <EquipoList equipos={ equipos } />
        </div>
    )
}

export default EquipoListContainer;