import { useState } from "react";

function useComprador() {
    const [ comprador, setComprador ] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        emailControl: "",
    });

    const handleInputChange = ( element ) => {
        setComprador({
        ...comprador,
        [element.target.name]: element.target.value,
        });
    };

    return { comprador, handleInputChange };
}

export default useComprador;