function validar() {
    var nombres, apellidos, correo, password, edad, country, telefono, genero;
    nombres = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    password = document.getElementById("password").value;
    edad = document.getElementById("edad").value;
    country = document.getElementById("country").value;
    telefono = document.getElementById("number").value;
    genero = document.getElementById("genero").value;

    if(nombres === "", apellidos === "", correo === "", contraseña === "", edad === "", country === "", telefono === "", genero === "" ) {
        alert("todos los campos son obligatorios");
        return false;
    }
    else if(nombres.lenght>20) {
        alert("El nombre es muy largo")
    }
    else if(apellidos.lenght>20) {
        alert("El apellido es muy largo")
    }
    else if(contraseña.lenght>10) {
        alert("la contraseña es muy largo")
    }
    else if(isNam.lenght>9) {
        alert("El telefono ingresado no es un numero")
    }
}