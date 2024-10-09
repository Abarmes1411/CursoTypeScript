/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Hola Mundo");
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
var nombree = "Jesulin"; //Variable global
let apellido = "Barroso"; //Variable local
const PI = 3.1415; //Variable constante
console.log("Hola" + " Mundo soy " + nombree + " " + apellido);
console.log(nombree, apellido);
console.log(nombree + apellido);
console.log(`Hola  ${nombree}`);
let a, b, c;
a = "texto";
b = "texto2";
c = 2;
//Array de Datos
let alumnos1A = ["Juan", "Julio", "Jose"];
let alumnos2A = ["Fran"];
let alumnos3A = ["Julio", "Jose"];
let alumnos = [...alumnos1A, ...alumnos2A, ...alumnos3A];
console.log(`${alumnos}`);
let valores = ["Hola", 3, "ee", false];
//Objetos
let misDatos = {
    nombre: "Jose",
    apellidos: "Rodriguez",
    edad: 18
};
let configuracion = Object.assign({ versionTS: "Es6", versionCodigo: "1.0" }, misDatos);
let propiedad1 = configuracion.versionCodigo;
let propiedad2 = configuracion.versionTS;
console.log(`${propiedad1} ${propiedad2}`);
//enumeraciones
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["Pendiente"] = "P";
    EstadoTarea["Terminado"] = "T";
    EstadoTarea["Enproceso"] = "E";
})(EstadoTarea || (EstadoTarea = {}));
let estadoPendiente = EstadoTarea.Enproceso;
console.log(`${EstadoTarea.Enproceso}`);
if (EstadoTarea.Enproceso == "E") {
    console.log("Awebo");
}
let tarea1 = { nombre: "Tarea1", prioridad: 2, estado: EstadoTarea.Enproceso };
let empleado2;
empleado2 = { id: 34343, edad: 32, sueldo: 99999, nombre: "fdfdf" };
let empleado1 = { nombre: "Josema", edad: 18, sueldo: 1323423 };
console.log(empleado1.sueldo, empleado2.id);
//Operador Ternario
//Condicion ->>   ? verdadero : falso
console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecucion` : `La tarea ${tarea1.nombre} aun no se ha empezado`);
//IF-ELSE
if (tarea1.estado == "P") {
    //Codigo
}
else if (tarea1.estado == "E") {
    //codigo
}
else {
    //Codigo
}
//SWITCH
switch (tarea1.estado) {
    case "P":
        console.log("Tarea en Proceso");
        break;
    case "E":
        console.log("Tarea en Ejecucion");
        break;
    default:
        console.log("Otro estado o no tiene estado");
        break;
}
//TRY CATCH
try {
    let numero1 = 1;
    console.log(numero1.toString());
}
catch (error) {
    console.log("ERROr");
}
// ** Bucles
let listaTareasNuevas = [
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
];
//Foreach
listaTareasNuevas.forEach((tarea, i) => {
    console.log(`${i} - ${tarea.nombre}`);
});
//For clasico de toa la vida
for (let index = 0; index < listaTareasNuevas.length; index++) {
    const tarea = listaTareasNuevas[index];
    console.log(`${index} - ${tarea.nombre}`);
}
//Bucles While
while (tarea1.estado !== EstadoTarea.Terminado) {
    if (tarea1.prioridad == 2) {
        tarea1.estado = EstadoTarea.Terminado;
        break;
    }
    else {
        tarea1.prioridad++;
    }
}
//Do while
do {
    tarea1.prioridad++;
    tarea1.estado = EstadoTarea.Terminado;
} while (tarea1.estado !== EstadoTarea.Terminado);
// ** Factor Spread
//En asignacion de variables
let { nombre, estado, prioridad } = tarea1;
//En listas
let listaLunes = ["Leche", "Huevos"];
let listaMartes = ["Harina", "Trigo"];
let listaMiercoles = ["York", "Salami"];
let listaSemana = [...listaLunes, ...listaMartes, ...listaMiercoles];
console.log(`${listaSemana}`);
//En objetos
let estadoApp = {
    user: "admin",
    session: 3,
    jwt: "Bearer24242"
};
//Cambiar valor por spread
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
// ** Funciones
//Funcion normal
function saludo(nombre) {
    console.log(`${nombre}, buenas tardes.`);
}
saludo("Jesulin");
//Funcion con parametros por defecto
function saludoDefault(nombre = "Jesulin") {
    console.log(`${nombre}, buenas noches.`);
}
saludoDefault();
saludoDefault("Estefania");
//Funcion con parametros opcionales
function saludoOpcional(nombre) {
    let nombreParam = nombre;
    if (nombreParam == undefined) {
        nombreParam = "Default";
    }
    console.log(`Hola ${nombreParam}, qué tal estas?`);
}
saludoOpcional();
// Funciones con parámetros de varios tipos
function tiposFunct(tipo) {
    if (typeof (tipo) == "string") {
        console.log("tipo es un string");
    }
    else {
        console.log("tipo es un number");
    }
}
tiposFunct("Ahuevo");
// Función con retorno: return
function suma(a, b) {
    return a + b;
}
var result = suma(1, 2);
console.log(result);
console.log(suma(1, 2));
//Funcion con varios param
function variosParams(name, surname, age = 18) {
    if (surname) {
        console.log(`${name}, ${surname} tiene ${age}`);
    }
    else {
        console.log(`${name} tiene ${age} anios`);
    }
}
variosParams("Martin");
variosParams("Martin", "Joselito");
variosParams("Martin", undefined, 30);
variosParams("Martin", "Joselito", 30);
//Funcion multilples
function multiParam(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
multiParam("Emilio", "Julian");
//Funcion ARROW: forma más breve y clara de escribir funciones en comparación con la sintaxis tradicional, lo que mejora la legibilidad y mantiene la seguridad de los tipos
//(param1, param2, ..., paramN) => {}
let getDatosTarea = (tarea) => {
    return `La tarea denominada ${tarea.nombre} cuyo estado es ${tarea.estado} 
            tiene una prioridad ${tarea.prioridad} `;
};
console.log(getDatosTarea(tarea1));
//Funcion CallBack: Función que se pasa a otra función como parámetro y dentro de la misma es llamada. Se trata como objeto.
const obtengoSalario = (empleado, cobrar) => {
    if (empleado.edad > 70) {
        return;
    }
    else {
        cobrar(); //callback
    }
};
const cobrarEmpleado = (empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
};
obtengoSalario(empleado1, () => 'Cobrar Empleado1');
//Algunas maneras de hacerlo:
//Ejemplo 1: 
const funcionMuestra = function () {
    console.log("CallBack desde función estándar");
};
//setTimeout(funcionMuestra,100); // La función timeout llama a funciónMuestra después de 100ms
// Ejemplo 2: paso de una función anónima
//setTimeout(function(){console.log("CallBack desde función anónima")},1000);
// Ejemplo 3: paso de una función flecha
//setTimeout(()=>{console.log("CallBack desde función flecha")},500);
//Funcion Callback ejemplo Jose
let fsuma = function suma(a, b) {
    return a + b;
};
let fresta = function resta(a, b) {
    return a - b;
};
function opera(x, y, funcion) {
    return funcion(x, y);
}
opera(1, 2, fsuma); //Devuelve la suma de esos numeros
opera(1, 2, fresta); //Devuelve la resta de esos numeros
//Funciones asincronas ejemplo Jose
function asincrona() {
    return __awaiter(this, void 0, void 0, function* () {
        let suma = 0;
        for (let i = 0; i < 10000000; i++) {
            suma += i;
        }
        return suma;
    });
}
asincrona().then((data) => { console.log(`El resultado de async es ${data}`); });
console.log(`Linea posterior a la llamada asincrona`);
function getDataUniversity() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch("http://universities.hipolabs.com/search?country=Spain");
        let respuesta = yield data.json();
        return respuesta;
    });
}
getDataUniversity().then((data) => {
    data.forEach((universidad) => { console.log(universidad.name); });
});
function* fgeneradora() {
    for (let tarea in listaTareasNuevas) {
        yield listaTareasNuevas[tarea];
    }
}
let funciongen = fgeneradora();
console.log(funciongen.next());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map