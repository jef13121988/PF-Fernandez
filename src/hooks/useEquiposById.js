import { useEffect, useState } from "react";
import { getEquiposById } from "../mock/asyncMock";

function useEquiposById( id ) {
    const [ equipo, setEquipos ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        getEquiposById( id )
        .then( ( data ) => setEquipos( data ) )
        .finally( () => setIsLoading( false ) );
    }, []);

    return { equipo, isLoading };
}

export default useEquiposById;