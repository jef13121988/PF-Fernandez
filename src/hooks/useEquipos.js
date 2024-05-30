import { useEffect, useState } from "react";
import { getEquipos, getEquiposByCategory } from "../mock/asyncMock";

function useEquipos( categoryId ) {
    const [ equipos, setEquipos ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        if ( categoryId ) {
            getEquiposByCategory( categoryId )
            .then( ( data ) => setEquipos( data ) )
            .finally( () => setIsLoading( false ) );
        } else {
            getEquipos()
            .then( ( data ) => setEquipos( data ) )
            .finally( () => setIsLoading( false ) );
        }
        
    }, [categoryId]);


    return { equipos, isLoading };
}

export default useEquipos;