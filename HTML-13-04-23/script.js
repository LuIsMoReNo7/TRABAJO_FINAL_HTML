function validar() {
    var nombre, apellidos, correo, contraseña, edad, country, number, genero;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    contraseña = document.getElementById("password").value;
    edad = document.getElementById("edad").value;
    country = document.getElementById("country").value;
    number = document.getElementById("number").value;
    genero = document.getElementById("genero").value;

    if(nombre === "", apellidos === "", correo === "", edad === "", country === "", number === "", genero === "" ) {
        alert("El campo esta vacio");
        return false;
    }
    else if(nombre.lenght>10) {
        alert("El nombre es muy largo")
    }
    else if(apellidos.lenght>10) {
        alert("El apellido es muy largo")
    }
    else if(password.lenght>10) {
        alert("El apellido es muy largo")
    }
}