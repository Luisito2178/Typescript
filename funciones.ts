//                          VARIABLES

//VARIABLE LET
let saludo = "Hola mundo desde Typescript"; // Ya no usar la palabra reservada var

let numero = 10; // SIempre usar la palabra reservada al inciar variables

let cualquiera:any; // any sirve para almacenar cualquier tipo de dato
cualquiera = "Cadena";
cualquiera = 3;

//VARIBALE CONST o constante
const PI = 3.14; // Una vez asignado el valor a una constante no se puede modificar

function saludar(){
    console.log("saludar y adios");
    console.log(numero);
    console.log(cualquiera);
    console.log(PI);
}

saludar();


//                      CLASES

class Persona{
    private nombre:string; // asignarle el valor a la variable 

    constructor(nombre: string){
        this.nombre = nombre;
    }

    getNombre():string{
        return this.nombre;
    }

    static metodoEstatico():int{
        return 21;
    }
}

let persona1 = new Persona("Luis");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());


//                              INTERFACES

interface  User{ // Objeto Usuario 
    userName:string;
    password:string;
    confirmPass?:string; // Esto es opcional
}

let user1:User = {userName:"Luis", password:"1234",confirmPass:"1234"}

let user2:User = {userName:"Angel", password:"4321"} // No es necesario confirmar password

console.log(user1);
console.log(user1.userName); // Unicamente imprimir un valor de los atributos
console.log(user2);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function(){
        console.log("abordando")
    }
}

avion.abordarTransporte();