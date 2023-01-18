"use strict";
//                          VARIABLES
//VARIABLE LET
let saludo = "Hola mundo desde Typescript"; // Ya no usar la palabra reservada var
let numero = 10; // SIempre usar la palabra reservada al inciar variables
let cualquiera; // any sirve para almacenar cualquier tipo de dato
cualquiera = "Cadena";
cualquiera = 3;
//VARIBALE CONST o constante
const PI = 3.14; // Una vez asignado el valor a una constante no se puede modificar
function saludar() {
    console.log("saludar y adios");
    console.log(numero);
    console.log(cualquiera);
    console.log(PI);
}
saludar();
