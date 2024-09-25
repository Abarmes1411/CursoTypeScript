console.log("Hola Mundo")


/**
 * 1. Tipos de datos
 * 
 * string
 * number - entero y decimal
 * boolean
 * null 
 * undefinied
 * 
 */
var nombre:string = "Jesulin"; //Variable global
let apellido:string = "Barroso"; //Variable local
const PI:number = 3.1415; //Variable constante


console.log("Hola"+" Mundo soy "+nombre+" "+apellido);
console.log(nombre, apellido);
console.log(nombre + apellido);
console.log(`Hola  ${nombre}`);

let a:string, b:string, c:number;
a="texto";
b="texto2";
c=2;

//Array de Datos

let alumnos1A:string[] = ["Juan","Julio","Jose"];
let alumnos2A:string[] = ["Fran"];
let alumnos3A:string[] = ["Julio","Jose"];
let alumnos:string[] = [...alumnos1A, ...alumnos2A, ...alumnos3A];

let valores: (string|number|boolean)[] = ["Hola", 3, "ee", false];

