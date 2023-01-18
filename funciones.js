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
//                      CLASES
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 21;
    }
}
let persona1 = new Persona("Luis");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
let user1 = { userName: "Luis", password: "1234", confirmPass: "1234" };
let user2 = { userName: "Angel", password: "4321" }; // No es necesario confirmar password
console.log(user1);
console.log(user1.userName); // Unicamente imprimir un valor de los atributos
console.log(user2);
let avion = {
    abordarTransporte: function () {
        console.log("abordando");
    }
};
avion.abordarTransporte();
