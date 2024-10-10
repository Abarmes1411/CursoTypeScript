import Cookies from 'js-cookie'

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
var nombree:string = "Jesulin"; //Variable global
let apellido:string = "Barroso"; //Variable local
const PI:number = 3.1415; //Variable constante


console.log("Hola"+" Mundo soy "+nombree+" "+apellido);
console.log(nombree, apellido);
console.log(nombree + apellido);
console.log(`Hola  ${nombree}`);

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

// ** Bucles

let listaTareasNuevas: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: EstadoTarea.Enproceso,
        prioridad: 2
    },
    {
        nombre: "Tarea 2",
        estado: EstadoTarea.Pendiente,
        prioridad: 1
    },
    {
        nombre: "Tarea 3",
        estado: EstadoTarea.Terminado,
        prioridad: 3
    }
]

//Foreach
listaTareasNuevas.forEach(
    (tarea: Tarea, i:number) =>
        {console.log(`${i} - ${tarea.nombre}`);
    }
);
 //For clasico de toa la vida
for(let index=0; index < listaTareasNuevas.length;index++){
    const tarea = listaTareasNuevas[index];
    console.log(`${index} - ${tarea.nombre}`)
}



//Bucles While

while(tarea1.estado !== EstadoTarea.Terminado){
   if(tarea1.prioridad==2){
    tarea1.estado = EstadoTarea.Terminado;
    break;
} else{
    tarea1.prioridad++;
}
}

//Do while

do{
    tarea1.prioridad++;
    tarea1.estado = EstadoTarea.Terminado;
}while(tarea1.estado !== EstadoTarea.Terminado);



// ** Factor Spread

//En asignacion de variables
let {nombre, estado, prioridad} = tarea1;

//En listas
let listaLunes:string[] = ["Leche","Huevos"];
let listaMartes:string[] = ["Harina","Trigo"];
let listaMiercoles:string[] = ["York","Salami"];
let listaSemana:string[] = [...listaLunes, ...listaMartes, ...listaMiercoles];
console.log(`${listaSemana}`)


//En objetos

let estadoApp = {
    user:"admin",
    session: 3,
    jwt:"Bearer24242"
}

//Cambiar valor por spread
let nuevoEstado = {
    ...estadoApp,
    session: 4
}




// ** Funciones

//Funcion normal
function saludo (nombre:string){
    console.log(`${nombre}, buenas tardes.`)
}

saludo("Jesulin");

//Funcion con parametros por defecto

function saludoDefault (nombre:string = "Jesulin"){
    console.log(`${nombre}, buenas noches.`);
}
saludoDefault();
saludoDefault("Estefania");

//Funcion con parametros opcionales

function saludoOpcional (nombre?:string){
    let nombreParam = nombre;
    if(nombreParam == undefined){
        nombreParam = "Default";
    }
    console.log(`Hola ${nombreParam}, qué tal estas?`);

}
saludoOpcional();

// Funciones con parámetros de varios tipos
function tiposFunct (tipo: string | number){
    if (typeof(tipo) == "string"){
        console.log("tipo es un string");
    } else{
        console.log("tipo es un number");
    }
}
tiposFunct("Ahuevo");

// Función con retorno: return
function suma (a:number,b:number): number{
    return a+b;
}

var result:number = suma(1,2);
console.log(result);
console.log(suma(1,2));


//Funcion con varios param

function variosParams(name:string, surname?:string, age:number = 18){

    if(surname){
        console.log(`${name}, ${surname} tiene ${age}`)
    }else{
        console.log(`${name} tiene ${age} anios`)
    }
}

variosParams("Martin")
variosParams("Martin", "Joselito")
variosParams("Martin", undefined, 30)
variosParams("Martin", "Joselito", 30)


//Funcion multilples

function multiParam (...nombres: string[]):void{
    nombres.forEach((nombre)  => {
        console.log(nombre);
    })
}
multiParam("Emilio","Julian");



//Funcion ARROW: forma más breve y clara de escribir funciones en comparación con la sintaxis tradicional, lo que mejora la legibilidad y mantiene la seguridad de los tipos
//(param1, param2, ..., paramN) => {}

let getDatosTarea = (tarea:Tarea):string => 
    {return `La tarea denominada ${tarea.nombre} cuyo estado es ${tarea.estado} 
            tiene una prioridad ${tarea.prioridad} `
}
console.log(getDatosTarea(tarea1));


//Funcion CallBack: Función que se pasa a otra función como parámetro y dentro de la misma es llamada. Se trata como objeto.
 
const obtengoSalario = (empleado:Empleado, cobrar: () => string) => {
    if(empleado.edad > 70){
        return
    }else{
        cobrar(); //callback
    }
}
const cobrarEmpleado = (empleado:Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`)
}
obtengoSalario(empleado1, () => 'Cobrar Empleado1')

//Algunas maneras de hacerlo:

//Ejemplo 1: 
const funcionMuestra = function (){
    console.log("CallBack desde función estándar");
}
//setTimeout(funcionMuestra,100); // La función timeout llama a funciónMuestra después de 100ms

// Ejemplo 2: paso de una función anónima
//setTimeout(function(){console.log("CallBack desde función anónima")},1000);

// Ejemplo 3: paso de una función flecha
//setTimeout(()=>{console.log("CallBack desde función flecha")},500);




//Funcion Callback ejemplo Jose
let fsuma = function suma(a:number, b:number){
    return a+b;
}

let fresta = function resta(a:number,b:number){
    return a-b;
}

function opera(x:number, y:number, funcion:(a:number,b:number)=>number){
    return funcion(x,y);
}
opera(1,2,fsuma); //Devuelve la suma de esos numeros
opera(1,2,fresta); //Devuelve la resta de esos numeros

//Funciones asincronas ejemplo Jose
async function asincrona(){
    let suma:number = 0;
    for(let i=0;i<10000000;i++){
        suma+=i;
        
    }
    return suma;
}

asincrona().then((data:number) => {console.log(`El resultado de async es ${data}`)});
console.log(`Linea posterior a la llamada asincrona`);



//Ejemplo real de asyncrono
//Mas simple y metiendolo en objetos
type University = {
    domains: string[],
    alpha_two_code: string,
    name:string

}
//async function getDataUniversity() : Promise <University []> {
  //const data = await fetch("http://universities.hipolabs.com/search?country=Spain");
  //let respuesta:Promise <University[]> = await data.json() as Promise <University[]>;
  //return respuesta;
//}

//getDataUniversity().then((data:University[]) => {data.forEach((universidad) => {console.log(universidad.name)}});


function* fgeneradora():Generator<Tarea>{
   
    for (let tarea  in listaTareasNuevas) {
        yield listaTareasNuevas[tarea]
    }
}

let funciongen = fgeneradora();
console.log(funciongen.next());

//ASYNC GENERADORA

function* fgeneradora2 () : Generator<string>{
    yield "Hola"
    yield "Mundo"
    yield "IES"
}

let llamadafgen2 = fgeneradora2();


console.log(llamadafgen2.next()); //Hola
console.log(llamadafgen2.next()); //Mundo
console.log(llamadafgen2.next()); //IES

type WebPage = {
    Name:string,
    Domain:string,
    Description:string
}
async function* obtenerDatosWeb(): AsyncGenerator<WebPage>{
    let peticion = await fetch("https://haveibeenpwned.com/api/v2/breaches")
    let datos:WebPage[]= await peticion.json() as WebPage[];

    for(let i=0; i<datos.length;i++){
        yield datos[i];
    }

}

let datosWebPage = obtenerDatosWeb();

datosWebPage.next().then(({value, done})=>{console.log(`${value.Name} - ${value.Description}`)}) ;

//SOBRECARGA DE FUNCIONES


function saludarSobrecarga (nombre:string):string;
function saludarSobrecarga (nombre:string, apellido:string):string;
function saludarSobrecarga (nombre:string, apellido:string, edad:string):string;

function saludarSobrecarga (nombre:string, apellido?:string, edad?:string|number){
    
    let saludo = `Hola ${nombre}`

    if(apellido != undefined){
        saludo = saludo+`${apellido}`
    }
    if(edad != undefined){
        saludo = saludo+`${edad}`
    }

    return saludo;
}

saludarSobrecarga(`Josema`);



//Ejercicio 2

function ej2_tarea1(type:String = "SessionStorage", key:string, data:Tarea[]){

    if(type == "session"){
        sessionStorage.setItem(key, data.toString());
        console.log("Subido en el sessionStorage");
    } else if (type == "local"){
        localStorage.setItem(key, data.toString());
        console.log("Subido en el localStorage");
    }else{
        console.log("Debe ser una de las dos");
    }
}

//Ejercicio 3

ej2_tarea1("session", "datos", listaTareasNuevas)
ej2_tarea1("local", "datos", listaTareasNuevas)

//Ejercicio 4

function ej4_tarea1_recuperar(type:String = "session", key:string){

    if(type == "session"){
        console.log("Devuelto el sessionstorage");
        return sessionStorage.getItem(key);
    } else if (type == "local"){
        console.log("Devuelto el localStorage");
        return localStorage.getItem(key);
    }else{
        console.log("Debe ser una de las dos");
    }
}

//Ejercicio 5

ej4_tarea1_recuperar("session", "datos")
ej4_tarea1_recuperar("local", "datos")

//Ejercicio 6

function ej6_tarea1_eliminar(type: string, key: string){
    if (type === "session") {
        sessionStorage.removeItem(key);
        console.log("sessionStorage eliminada");
    } else if (type === "local") {
        localStorage.removeItem(key);
        console.log("localStorage eliminada");
    } else {
        console.log("Debe ser una de las dos");
    }
}

ej6_tarea1_eliminar("session", "datos")
ej6_tarea1_eliminar("local", "datos")

//Ejercicio 7 - COOKIES

Cookies.set('nombre', 'AJesus', {expires:7,path:"/"})
Cookies.set('apellidos', 'Barroso', { expires: 2, path: '/' });
Cookies.set('email', 'abarmes1411@iescarrillo.es', { expires: 4, path: '/' });

console.log(Cookies.get('nombre'));
console.log(Cookies.get('apellidos'));
console.log(Cookies.get('email'));

Cookies.remove('nombre');
Cookies.remove('apellidos');
Cookies.remove('email');



// ACCESO A ELEMENTOS DEL DOM

let input = document.getElementById("input-contenido") as HTMLInputElement;
console.log("Input del string: "+input.value);
let btnNuevoContenido = document.getElementsByName("btn-add-content")[0] as HTMLButtonElement;
let div = document.getElementsByTagName("div") as HTMLCollectionOf<HTMLDivElement>;

console.log(input);
console.log(btnNuevoContenido);
console.log(div);

let elementoOL = document.querySelector("#lista-contenidos") as HTMLOListElement;
let elementosLI = document.getElementById("lista-contenidos")?.getElementsByTagName("li");
console.log(elementosLI);
let elementosLI2 = document.querySelectorAll("ol[id='lista-contenidos'] > li");
console.log(elementosLI2);

// CREACION DE ELEMENTOS

let nuevoElemento:HTMLElement = document.createElement("li");
nuevoElemento.innerText = "Nuevo Elemento"
elementoOL.appendChild(nuevoElemento);
elementoOL.append(nuevoElemento);
elementoOL.prepend(nuevoElemento);

btnNuevoContenido.addEventListener("click",(event)=>{
    //TO DO: 
    console.log("Usuario hace click ene l boton")
});