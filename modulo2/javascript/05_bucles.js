console.log("Bucles en JavaScript");

// Imprime del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log("numero: " + i);
}

// Suma del 1 al 10
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("Sumatoria indices: ", suma);

// Recorre letras del nombre
let nombre = "francisco";
for (let i = 0; i < nombre.length; i++) {
    console.log("letra: " + nombre[i]);
}

// Cuadrado de cada número del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log("cuadrado de: ", i, " es: ", i ** 2);
}

console.log("Bucles while");

let i = 1;
while (i <= 10) {
    console.log("indice: ", i);
    i++;
}

let miArreglo = [-2, 3, 1, 2, 3];
let indice = 1;
while (indice < miArreglo.length) {
    console.log("valor en indice ", indice, " es: ", miArreglo[indice]);
    indice++;
}


let numero = 1;
while (numero <= 10) {
    if (numero % 2 === 0)
        console.log("Numero", numero, "es par");
    numero++;
}

let x = 5
do {
    console.log("x es: ", x);
    x--;
} while (x!=0);


let a = 1;
do {
    console.log("5 x" + a + "=" + (5 * a));
    a++;
} while (a <= 10);


let numeros = [3, 6, 12, 1, 8];
let m = 0;
let mayor = numeros[0]; 
while (m < numeros.length) {
    if (numeros[m] > mayor) {
        mayor = numeros[m];
    }
    m++;
}
console.log("El número mayor es:", mayor);




