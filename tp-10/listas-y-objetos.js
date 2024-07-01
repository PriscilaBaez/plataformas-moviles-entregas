var listaPersonasEjemplo = [
    {
        "apellido": "Nogales",
        "nombre": "Matias",
        "edad": 18,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Axel",
        "edad": 17,
        "documento": 23456
    },
    {
        "apellido": "Monteros",
        "nombre": "Lucía",
        "edad": 18,
        "documento": 34567
    },
    {
        "apellido": "Baez",
        "nombre": "Priscila",
        "edad": 19,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    let resultado = listaDePersonas.sort((a, b) => {
        return a.apellido.localeCompare(b.apellido);
    });
    return resultado;
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    return listaDePersonas.map(persona => persona.nombre);
}

console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
function promedioEdades(listaDePersonas) {
    let resultado = listaDePersonas.reduce((suma, persona) => suma + persona.edad, 0);
    return resultado / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - soloMayoresDeEdad
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    return listaDePersonas.filter(persona => persona.edad >= 18);
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 05 - laPersonaMayor
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    return listaDePersonas.reduce((mayor, persona) => (persona.edad >= mayor.edad ? persona : mayor));
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));
