import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

function useEquipos( [ id, string ] ) {
    const [ equipos, setEquipos ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () => {
        setIsLoading(true);
        const db = getFirestore();
        const equiposCollection = collection( db, "equipos" );

        if ( id ) {
            const capitalizedId = id[0].toUpperCase() + id.slice(1);

            const equiposQuery = query(
                equiposCollection,
                where( ( string == "cat" ? "categoria" : "subcategoria" ), "==", capitalizedId )
            );
            
            getDocs( equiposQuery )
                .then( ( snapshot ) => {
                    setEquipos(
                        snapshot.docs.map( ( doc ) => (
                            { id: doc.id, ...doc.data() }
                        ))
                    );
                })
                .finally( () => setIsLoading( false ) );

        } else {
            getDocs( equiposCollection )
                .then( ( snapshot ) => {
                    setEquipos(
                        snapshot.docs.map( ( doc ) => (
                            { id: doc.id, ...doc.data() }
                        ))
                    );
                })
                .finally( () => setIsLoading( false ) );

        }
        
    }, [ id ]);


    return { equipos, isLoading };
}

export default useEquipos;