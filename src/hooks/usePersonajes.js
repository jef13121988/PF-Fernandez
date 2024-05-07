import { useEffect, useState } from "react";
import { getPersonajes } from "../mock/asyncMock";

function usePersonajes( ) {
    const [ personajes, setPersonajes ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        getPersonajes()
        .then( ( data ) => setPersonajes( data ) )
        .finally( () => setIsLoading( false ) );
    }, []);


    return { personajes, isLoading };
}

export default usePersonajes;