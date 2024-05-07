import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { getPersonajesByClase } from "../mock/asyncMock";

function usePersonajesByClase( claseId ) {
    const [ personajes, setPersonajes ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const location = useLocation();

    useEffect( () => {
        getPersonajesByClase( claseId )
        .then( ( data ) => setPersonajes( data ) )
        .finally( () => setIsLoading( false ) );
    }, [location]);


    return { personajes, isLoading };
}

export default usePersonajesByClase;