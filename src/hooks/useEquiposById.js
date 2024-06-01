import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function useEquiposById( id ) {
    const [ equipo, setEquipo ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        const db = getFirestore();
        const equipoPorId = doc( db, "equipos", id );

        getDoc( equipoPorId )
            .then( ( doc )  => {
                if ( doc.exists() ) {
                    setEquipo({
                        id: doc.id,
                        ...doc.data(),
                    });
                    
                } else {
                    alert("No such document!");
                }
            })
            .finally(() => setIsLoading( false ) );

    }, [ id ]);
    
        return { equipo, isLoading };
}

export default useEquiposById;