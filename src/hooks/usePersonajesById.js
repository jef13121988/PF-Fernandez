import { useEffect, useState } from "react";
import { getPersonajesById } from "../mock/asyncMock";

function usePersonajesById( id ) {
    const [ personaje, setPersonajes ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        getPersonajesById( id )
        .then( ( data ) => setPersonajes( data ) )
        .finally( () => setIsLoading( false ) );
    }, []);

    return { personaje, isLoading };
}

export default usePersonajesById;