function obtenerIniciales(nombreCompleto) {
    if (nombreCompleto) {
        let iniciales = "";
        nombreCompleto
            .trim()
            .split(" ")
            .map(nombre => {
                iniciales += nombre[0].toUpperCase();
            });

        return iniciales;

    } else {
        return "Entrada inválida";
    }
}
// Las 3 pruebas que funcionan correctamente
console.log(obtenerIniciales(" camilo esteban rueda "));
console.log(obtenerIniciales(" carlos eduardo lopez "));
console.log(obtenerIniciales("    Pedro Pablo pango    "));
// La prueba que no funciona 
console.log(obtenerIniciales(""));