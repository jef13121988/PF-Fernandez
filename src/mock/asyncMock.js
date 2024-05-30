//import { useEffect, useState } from "react";

const listaEquipos = async () => {
    try {
        // Indico la ruta del json
        const endPoint = '/data.json';
        // Intento conectarme con la ruta
        const response  = await fetch(endPoint);
        // Intento levantar la informaicón
        const json = await response.json();
        // Importo los arrays
        return json.imagenes;

    } catch (error) {
        alert("No se pudo encontrar el archivo.");
    };
};

export const getEquipos = () => {

    return listaEquipos().then( ( equipos ) => equipos );

};

export const getEquiposById = ( id ) => {

    return listaEquipos().then( ( equipos ) => equipos.find( ( equipo ) => equipo.id === parseInt(id) ) );

};

export const getEquiposByCategory = ( categoryId ) => {

    return listaEquipos().then( ( equipos ) => equipos.filter( ( equipo ) => equipo.categoria.toLowerCase() === categoryId ) );
    
};