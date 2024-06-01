import './EquipoListContainer.css';
import { useParams, Link } from 'react-router-dom';
import useEquipos from '../../hooks/useEquipos';
import EquipoList from "../equipo-list/EquipoList";

function EquipoListContainer() {
    const { categoryId } = useParams();
    const { subcategoryId } = useParams();
    const { equipos, isLoading } = useEquipos( categoryId ? [ categoryId, "cat" ] : [ subcategoryId, "sub" ] );

    const id = categoryId ? categoryId : subcategoryId;

    const armas = [ "Daga", "Espada", "Hacha", "Katana", "Lanza", "Martillo", "Shuriken" ];
    const varios = [ "Armadura", "Botas", "Escudo", "Guanteletes", "Yelmo" ];

    const categoryArray = ( categoryId == "armas" ) ? armas : varios;

    if ( isLoading ) return <h1> Cargando... </h1>;

    return (
        <div>
            <h1> { id ? id : "¡Bienvenid@!" } </h1>
            <div className="equipo__list__container">
                { categoryId ? (
                    categoryArray.map( ( subcategory ) => (
                        <Link to={`/category/subcategory/${subcategory.toLowerCase()}`}>
                            <button
                                className="equipo__list__container__button"
                                type="button">
                                {subcategory}
                            </button>
                        </Link>
                    )) ) : ( <> </> )
                }
            </div>
            <EquipoList equipos={ equipos } />
        </div>
    )
}

export default EquipoListContainer;