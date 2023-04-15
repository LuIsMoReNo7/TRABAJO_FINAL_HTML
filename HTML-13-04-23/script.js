function validar() {
    var nombre, apellidos, correo, edad, country, number, genero;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    edad = document.getElementById("edad").value;
    country = document.getElementById("country").value;
    number = document.getElementById("number").value;
    genero = document.getElementById("genero").value;

    if(nombre === "", apellidos === "", correo === "", edad === "", country === "", number === "", genero === "" ) {
        alert("El campo esta vacio");
        return false;
    }
    else if(nombre.leght>30) {
        alert("El nombre es muy largo")
        return false;
    }
    else if(apellidos.leght>30) {
        alert("El apellido es muy largo")
        return false;
    }
    
}