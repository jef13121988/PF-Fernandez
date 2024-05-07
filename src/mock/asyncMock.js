//import { useEffect, useState } from "react";

const listaPersonajes = async () => {
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

export const getPersonajes = () => {

    return listaPersonajes().then( ( personajes ) => personajes );

};

export const getPersonajesById = ( id ) => {

    return listaPersonajes().then( ( personajes ) => personajes.find( ( personaje ) => personaje.id === parseInt(id) ) );

};

export const getPersonajesByClase = ( claseId ) => {
    const nuevaClaseId = claseId == "barbaro" ? "bárbaro" : claseId;

    return listaPersonajes().then( ( personajes ) => personajes.filter( ( personaje ) => personaje.clase.toLowerCase() === nuevaClaseId ) );
    
};