function iniciarSesion() {
    var usuarioPredefinido = "admin";
    var contrasenaPredefinida = "1234";
    var intentos = 0;
    var maximoIntentos = 3;

    while (intentos < maximoIntentos) {
        var usuario = prompt("Ingrese su usuario");
        var contrasena = prompt("Ingrese su contraseña");

        if (usuario === usuarioPredefinido && contrasena === contrasenaPredefinida) {
            return true;
        } else {
            intentos++;
            alert("Usuario o contraseña incorrectos. Intentos restantes: " + (maximoIntentos - intentos));
        }
    }
}

function capturarNotasEstudiante() {
    var notas = [];
    for (var i = 0; i < 5; i++) {
        var nota = Number(prompt("Ingrese la nota " + (i + 1) + ":"));
        notas.push(nota);
    }
    return notas;
}

function calcularPromedioNotas(notas) {
    var suma = 0;
    for (var i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function determinarAprobacion(promedio){
    if (promedio < 3) {
        return "Reprueba";
    } else if (promedio <= 4) {
        return "Aprueba con dificultades";
    } else {
        return "Aprueba con excelencia";
    }
}

function mostrarResultado(nombreEstudiante, promedio, estado) {
    console.log("Estudiante: " + nombreEstudiante);
    console.log("Promedio: " + promedio.toFixed(2));
    console.log("Estado: " + estado);
}

function ejecucionPrograma() {
    if (iniciarSesion()) {
        while (true) {
            var nombreEstudiante = prompt("Ingrese el nombre del estudiante (o 'salir' para terminar):");
            if (nombreEstudiante.toLowerCase() === 'salir') {
                break;
            }
            
            var notas = capturarNotasEstudiante();
            var promedio = calcularPromedioNotas(notas);
            var estado = determinarAprobacion(promedio);
            mostrarResultado(nombreEstudiante, promedio, estado);
        }
    }
}

ejecucionPrograma();