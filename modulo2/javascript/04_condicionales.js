let temperature = 35;

if (temperature > 30) {
    console.log("Hace calor");
}

let password = "pass123";
if (password === "pass123"){
    console.log("Usuario logueado");
} else{
    console.log("Acceso denegado");
} 

let nota = 7;
if (nota >= 9){
    console.log("Sobresaliente");
} else if (nota >= 6){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

let edad = 20;
let tiene_licencia = true;
if (edad >= 18){
    if (tiene_licencia){
        console.log("Puede conducir");
    } else {
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}

edad = 18;
tiene_licencia = true;
if (edad >= 18){
    if (tiene_licencia){
        console.log("Puede conducir");
    } else {
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}

//Estructura switch
let dia= "lunes";
switch (dia){
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Ultimo dia laboral");
        break;
    default:
        console.log("Dia normal");
}

let a = 10;
let b = 25;
let c = 15;

if (a > b && a > c) {
    console.log("El número mayor es A:", a);
} else if (b > a && b > c) {
    console.log("El número mayor es B:", b);
} else if (c > a && c > b) {
    console.log("El número mayor es C:", c);
} else {
    console.log("Hay números iguales");
}



