import { useState } from "react";

function useContar( initialValue = 0 ) {
    const [ contar, setContar ] = useState( initialValue );

    const agregar = () => setContar( contar + 1 );

    const sacar = () => setContar( contar - 1 );

    const resetear = () => setContar( initialValue );
    
    return { contar, agregar, sacar, resetear };

}

export default useContar;