import './EquipoList.css';
import Equipo from "../equipo/Equipo";
import { Link } from 'react-router-dom';

function EquipoList( { equipos } ) {
  
    return (
        <div className="equipo__list__container">
            { equipos.map( ( equipo ) => (
                <Link to={`/equipamiento/${equipo.id}`} className="equipo__list__link">
                    <Equipo key={ equipo.id } equipo={ equipo } />
                </Link>
            ))}
        </div>
    );
}

export default EquipoList;