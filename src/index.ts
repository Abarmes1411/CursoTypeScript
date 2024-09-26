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
console.log(`${alumnos}`)
let valores: (string|number|boolean)[] = ["Hola", 3, "ee", false];

//Objetos

let misDatos = {
    nombre: "Jose",
    apellidos: "Rodriguez",
    edad: 18
}

let configuracion = {
    versionTS: "Es6",
    versionCodigo: "1.0",
    ...misDatos
}

let propiedad1 = configuracion.versionCodigo;
let propiedad2 = configuracion.versionTS;
console.log(`${propiedad1} ${propiedad2}`)

//enumeraciones
enum EstadoTarea {"Pendiente"="P","Terminado"="T","Enproceso"="E"}

let estadoPendiente = EstadoTarea.Enproceso
console.log(`${EstadoTarea.Enproceso}`)


if(EstadoTarea.Enproceso == "E"){
    console.log("Awebo")
}

//interfaces

interface Tarea {
    nombre:string
    prioridad:number
    estado:EstadoTarea
}

let tarea1:Tarea = {nombre:"Tarea1", prioridad:2, estado:EstadoTarea.Enproceso};


//tipos

type Empleado = {
    nombre:string,
    edad:number,
    sueldo:number
}

type Jefe = {
    id:number,
    
}
let empleado2: Empleado & Jefe;
empleado2={id:34343, edad: 32, sueldo:99999, nombre:"fdfdf"}

let empleado1:Empleado = {nombre:"Josema",edad:18, sueldo:1323423};

console.log(empleado1.sueldo, empleado2.id);

//Operador Ternario
//Condicion ->>   ? verdadero : falso

console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecucion`:`La tarea ${tarea1.nombre} aun no se ha empezado`)

//IF-ELSE

if(tarea1.estado == "P"){
    //Codigo
}else if(tarea1.estado == "E"){
    //codigo
}else{
    //Codigo
}

//SWITCH

switch(tarea1.estado){
   case "P":
    console.log("Tarea en Proceso")
    break;
    case "E":
        console.log("Tarea en Ejecucion")
        break;
    default:
        console.log("Otro estado o no tiene estado")
        break;
}

//TRY CATCH

try{
    let numero1:number = 1;
    console.log(numero1.toString())
}catch(error){
    console.log("ERROr")
}