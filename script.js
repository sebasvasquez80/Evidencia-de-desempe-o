function iniciarSesion() {
    var usuarioPredefinido = "admin";
    var contrasenaPredefinida = "1234";
    var intentos = 0;
    var maximoIntentos = 3;

    while (intentos < maximoIntentos) {
        var usuario = prompt("Ingrese su usuario")
        var contrasena = prompt("Ingrese su contraseña")

        if (usuario === usuarioPredefinido && contrasena === contrasenaPredefinida) {
            return true
        } else {
            intentos++
            alert("Usuario o contraseña incorrectos. Intentos restantes: " + (maximoIntentos - intentos))
        }
    }
}

function capturarNotasEstudiante() {
    var notas = [];
    for (var i = 0; i < 5; i++) {
        var nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ":"));
        notas.push(nota);
    }
    return notas;
}