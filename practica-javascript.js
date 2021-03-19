// VARIABLES
// Es una espacio que nosotros guradamos en memoria
var recipiente = "agua";
console.log(recipiente);
// En el se pueden guardar 3 importantes tipos de datos
// String, Number y Boolean
// String
var string = "Texto";
console.log(string);
// number
var number = 10;
console.log(number);
//booleano
var tru = true;
console.log(tru);
var fal= false;
console.log(fal);
// Hay casos especiales de datos
// estos nos explican si una variable no esta definida o hay un error
// estos son:
// Undefined, Null, Nan
// Undefined: nos dice q una variable existe pero no tiene valor
// Null: es un valor vacio
// Nan: not a number, se obtiene cuando se intenta hacer una
// operacion con algo mas q numeros

// Hay tres formas de declarar una variable
// estas son
// Var, Let y Const
// Var: tiene alcanze global
// Let: Actualmente se utiliza let pq nos limite el alcanze
// al bloque donde se ejecuta
// const: es una variable incambiable, no se pueden cambiar
// *ver primera imagen explicando el scope*

// Para crear una variable solo se necesita hacer esto:
let numero;
// sin embargo, como no tiene valor nos soltara: undefined
// ahora para inicializarla, es decir, darle un valor 
// se debe hacer esto
numero = 30;
// javascript utiliza el ultimo valor de las variables
// si hacemos esto:
numero = 40;
// y luego la mostranmos
console.log(numero);
// nos mostrara el ultimo valor
// const no se puede inicializar como con let
// nos dara error, se debe inicializar en linea

// Ahora bien, se pueden crear multiples variables

let numero1, numero2, numero3;

numero1 = 10;
numero2 = 20;
numero3 = 30;

console.log(numero1);
console.log(numero2);
console.log(numero3);
// solo se deben separar por comas

// hoisting: habla sobre de como un sitio web puede ser
// afectado por la creacion y su ejecucion
// mas adelante se explicara

// Pruebas con prompt

// let estado = prompt("Habla perro, ¿todo bien?");

// los prompt piden informacion al usuario
// esa informacion puede ser usada mientras q se encuentre
// en esa misma pagina web

// console.log(estado);



// OPERADORES 
// OPERADORES DE ASIGNACION
// Un operador de asignacion asigna un valor al operando de
// la izquierda basado en el valor del operando de la derecha

// *ver segunda imagen*

// Resto
let resto = 50;
resto %= 12;
console.log(resto);

// exponencianion
let exponenciacion = 5;
exponenciacion **= 3;
console.log(exponenciacion);


// OPERADORES ARITMETICOS
// Los operadores aritmeticos toman valores numericos(ya sean 
// literales o variables) como sus operandos y retornan un 
// valor numerico unico.

// *ver tercera imagen*


// CONCATENACION
// solo se deben separar las variables, cadenas de texto
// o numero, con el signo "+".
let saludos = "Hola mundo,";
let pregunta = "Hay alguien ahi?";
let edad = 15;
let frase = saludos + " " + pregunta + " " + edad;

console.log(frase);

// concat: se usa para concatenar, para poder usarlo debe de
// haber un string

let saludos2 = "Hola mundo2,";
let pregunta2 = "Hay alguien ahi2?";
let edad2 = 16;
let frase2 = saludos2.concat(pregunta2) + " " + edad2;

console.log(frase2);

//backits: " ` " es una forma mas practica de concatenar
// variables y texto

let saludos3 = "Hola mundo3,";
let pregunta3 = "Hay alguien ahi3?";
let edad3 = 17;
let frase3 = `${saludos3} viva chiabeee, ${pregunta3}, tengo ${edad3} años`;

console.log(frase3);

// comillas simples y dobles
// si se utilizan comillas dobles, no se puede utilizar de nuevo
// hasta que todo termine
// si se utilizan comillas simples, hay mas etica


let frase4 = 'Viva "chiabeeeee", wiiiiii, que viva papi "madurooo';

console.log(frase4);


// OPERADORES DE COMPARACION
// Estos comparan dos expresiones y devuelven un valor
// Boolean que representa la relacion de sus valores

// *ver cuarta imagen*

// OPERADORES LOGICOS
// Estos nos devuelven un resultado a partir 
// de que se cumpla o no una condicion, su resultado es booleano
// y sus operandos son valores logicos o asimilables a ellos

// AND(&&) si las dos son true, el resultado es true
// OR (||) si alguna de las dos es true, el resultado es true
// NOT (!) da el contrario


// CANEL CASE
// la primera palabra empieza en minuscula, pero las siguientes
// empiezan en mayuscula, asi son todas los metodos en javascript
// holaComoEstasAmigo --- ejemplo

// CONDICIONALES
// Un condicional es una sentencia que nos permite validar algo

// tip: los bloques se ejecutan. los bloques comienzan
// con llaves y se cierran con als mismas. estos se ejecutan
// si el valor es true

if (20 == "20") {
    console.log("sicierto");
} else if (20 === "20"){
    console.log("sicierto");
} else {
    console.log("tu eres pendejo o q?");
}

// Historia de kofla parte 1:
// Tres chicos de 23 años perfectamente normales, entran a una 
// heladeria a comprar un helado, pero hay un problema: los precios 
// no estan al lado de cada estante con su respectivo helado.
// Ellos quieren comprar el helado mas caro que puedan con el
// dinero que tienen.
// Cada uno tiene distintas cantidades de dinero y hay una tabla
// en la que podemos basarnos para saber el costo de cada helado.

// Tenemos las siguientes soluciones:
// 1-Ingresar el monto y mostrar el helado mas caro q pueden comprar
// 2-Si hay 2 o mas, mostrar ambos
// 3-Indicar el vuelto

// let dineroKofla, dineroRoberto, dineroPedro;

// dK = prompt("cuanto dinero tienes Kofla?");
// dR = prompt("cuanto dinero tienes Roberto?");
// dP = prompt("cuanto dinero tienes Pedro?");

// if (dK >= 1 && dK < 1.6) {
//     console.log("Kofla comprate el helado de crema");
//     console.log("y te sobran " + (dK - 1));
// } else if (dK >= 1.6 && dK < 1.7) {
//     console.log("Kofla comprate el helado de chocolate");
//     console.log("y te sobran " + (dK - 1.6));
// } else if (dK >= 1.7 && dK < 1.8) {
//     console.log("Kofla comprate el helado de fresa");
//     console.log("y te sobran " + (dK - 1.7));
// } else if (dK >= 1.8 && dK < 2.9) {
//     console.log("Kofla comprate el helado de manzana");
//     console.log("y te sobran " + (dK - 1.8));
// } else if (dK >= 2.9) {
//     console.log("Kofla comprate el helado de sardina o el napolitano");
//     console.log("y te sobran " + (dK - 2.9));
// } else{
//     console.log("Kofla, Lo siento tas muy pobre");
// }

// if (dR >= 1 && dR < 1.6) {
//     console.log("Roberto, comprate el helado de crema");
//     console.log("y te sobran " + (dR - 1));
// } else if (dR >= 1.6 && dR < 1.7) {
//     console.log("Roberto, comprate el helado de chocolate");
//     console.log("y te sobran " + (dR - 1.6));
// } else if (dR >= 1.7 && dR < 1.8) {
//     console.log("Roberto, comprate el helado de fresa");
//     console.log("y te sobran " + (dR - 1.7));
// } else if (dR >= 1.8 && dR < 2.9) {
//     console.log("Roberto, comprate el helado de manzana");
//     console.log("y te sobran " + (dR - 1.8));
// } else if (dR >= 2.9) {
//     console.log("Roberto, comprate el helado de sardina o el napolitano");
//     console.log("y te sobran " + (dR - 2.9));
// } else{
//     console.log("Roberto, Lo siento tas muy pobre");
// }

// if (dP >= 1 && dP < 1.6) {
//     console.log("Pedro, comprate el helado de crema");
//     console.log("y te sobran " + (dP - 1));
// } else if (dP >= 1.6 && dP < 1.7) {
//     console.log("Pedro, comprate el helado de chocolate");
//     console.log("y te sobran " + (dP - 1.6));
// } else if (dP >= 1.7 && dP < 1.8) {
//     console.log("Pedro, comprate el helado de fresa");
//     console.log("y te sobran " + (dP - 1.7));
// } else if (dP >= 1.8 && dP < 2.9) {
//     console.log("Pedro, comprate el helado de manzana");
//     console.log("y te sobran " + (dP - 1.8));
// } else if (dP >= 2.9) {
//     console.log("Pedro, comprate el helado de sardina o el napolitano");
//     console.log("y te sobran " + (dP - 2.9));
// } else{
//     console.log("Pedro, Lo siento tas muy pobre");
// }


// Kofla prefiero no comprar ningun helado, se molesta, rompe todo el local
// el local y decide darle ese dinero a un indigente, el cual 
// piensa comprar un boleto de loteria. 

// El indigente piensa estas opciones:
// 1-Si le alcanza uno, lo compra 
// 2-Si le alcanza dos, compra dos 
// 3-Si le alcanza tres y le sobra, compra dos y regala el vuelto
// 4-Debe mostrarse en la pantalla los boletos que compro y 
// cuanto fue el vuelto.

// Tenemos un detector de mentiras muy utilizado por la policia
// creado con javascript. Este devuelve un dato asociado a la
// culpabilidad de sospechoso. 
// Devuelve 1 si esta mintiendo
// Devuelve 2 si no lo esta haciendo
// Devuelve 3 si esta indeciso

// Mientras tanto en el barrio sucedio un asesinato,
// y habian tres sospechosos, entre los cuales estaba kofla,
// cosa obvia debido a que habia destrozado un local el dia anterior.
// La policia se lo llevo a la comisaria, para utilizar en él, 
// el detector de mentiras.
// Los policias tienen estas opciones:
// 1- si el sospechoso miente, darle una descarga 
// 2- si no miente, no hacer nada
// 3- y si el detector no se decide, la pregunta debe ser mas 
// concreta 



// SE ACABA CAPITULO 1


// EMPIEZA CAPITULO 2

//ARRAYS: son un contenedor de difentees tipos de elementos
// con diferentes tipos de datos.
// Es una variable con muchos datos

// *ver quinta imagen*

let frutas = ["Pera", "Manzana", "Mango", "Fresa"];

// Para accerder a esos datos, se debe utilizar el simbolo "[]"
// especificando la posicion del elemento

console.log(frutas[1]);

// Todos los valores sin definir dentro de un array
// se marcan como undefined. Cuando un array se crea
// todas las posiciones son declaradas

// Una cosa es el numero de elemento
// Manzana es el elemento numero dos

// Otra la posicion de dicho elemento
// Manzana se posiciona en la posicion numero uno

// Los datos estan asociados con un indice
// que son las posiciones

// ARRAYS ASOCIATIVOS
// Un array asociativo es un conjunto de un elemento
// con diversas propiedades y datos

let pc = {
    nombre: "Maximo",
    procesador: "Intel Core I7",
    ram: "8GB",
    espacio: "250gb"
}

// Para acceder a los datos de un array asociativo
// debemos especificas a que propiedad queremos acceder

console.log(pc["procesador"]);

// un array asociativo es mas practico y util
let pnombre = pc["nombre"];
let pprocesador = pc["procesador"];
let pram = pc["ram"];
let pespacio = pc["espacio"];

let frasearray = `el nombre de mi pc es ${pnombre}
su procesador es ${pprocesador}  tiene ${pram} de ram 
y tiene ${pespacio} de espacio`;

console.log(frasearray);

// BUCLES E ITERACION
// BUCLE: es la repeticion de un bloque, si una condicion se 
// cumple. Los bucles preguntan la condicion todo el tiempo
// con el fin de volver a ejecutar el bloque
let numerob, numerob2, numerob3;

numerob = 0;
numerob2 = 0;
numerob3 = 0;

while (numerob < 10){
    numerob++;
    console.log(numerob + " 1ro");
}

// Un simple bucle while

// Do while: primero ejecuta el bloque y luego verifica si se
// cumple la condicion para volver a ejecutarlo

do {
    console.log(numerob2 + " 2do");
    numerob2++;

} while (numerob2 < 10);

// para detener un bucle se utiliza la sentencia "break"

while (numerob3 < 1000) {
    numerob3++;
    console.log(numerob3 + " 3er");
    if (numerob3 == 10) {
        break; //detiene el bucle
    }
}

// el break se utiliza para evitar q lso bucles sigan funcionando
// sin fin, dandole mas eficacia, rapidez y sencillez a los 
// programas

// Existen bucles indeterminados y determinados.

// do while y while son bucles indeterminados
// se ejecutan infinitas veces

// for, for in, for on son bucles determinados
// nosotros les decimos cuantas veces ejecutarse

// BUCLE FOR: funciona exactamente que un bucle while
// la diferencia es que el bucle for es un bucle
// determinado

let i = 30;

for(let i = 10; i > 0; i--)
// el bucle se separa en tres partes:
// declaracion e inicializacion
// condicion
// aumento o decremento

{ 
  if (i == 5) {
      continue;
    //esto hace que el numero 5 sea evitado o saltado
  };

  console.log(i);
};

// si queremos saltar un numero o valor, podemos usar la sentencia
// "continue", se usa mucho para evitar mostrar algo q no queremos

console.log(i);
// aqui se muestra el alcanza de let en el scope

// Bucle For in y For on: se utiliza para acceder a lso datos
// de un array u objeto

let animales=["perro", "gato", "conejo"];

// For in: nos muestra la posicion de los datos almacenados
// en el array
for (let animal in animales){
    console.log(animal);
};

// For of: nos muestra el dato almacenado en el array
for (let animal of animales){
    console.log(animal);
};

// la sentencia label nos permite asociar un bucle a un nombre

array1 =["maria", "josefa", "roberta"];
array2 =["mario", "jose", array1, "pedro"];

forRancio: //este es el label
for (let array in array2){
    if (array == 2) {
        for (let array of array1){
            console.log(array + " "); //Muestra a Maria
            break forRancio; //Deja de mostrar datos
        }
    } else {
        console.log(array2[array] + " "); //se ejecuta hasta q
        // array sea igual a 2
    }
}

// el primer forin llama a todas las posiciones del array2
// "array", luego este crea una condicion en la cual especifica
// que si array esta la posicion 2, lo cual es true, entonces
// ejecutara un bucle forof, el cual llamara a cada elemento
// del array1 "array", y luego muestra en la consola 
// todos los datos del array1 que se llamen "array", es decir
// todos. Sin embargo, deja de ejecutar el bucle cuando se
// utiliza la sentencia break, la cual termina todo el bucle
// que ha sido llamado "forRancio" con la sentencia label. Al
// no poder ejecutarse otra vez el condicional if, debido a que
// la sentencia break vuelve false la condicion independientemente
// si es logicamente verdadera, ejecuta el bloque de codigo 
// dentro del "else", el cual muestra los datos del array2

// Primero muestra lo que esta dentro del else, debido a que
// la posicion del array no seria 2 sino despues de tomar en cuenta
// a "Mario", y "Jose".

// FUNCIONES: llamamos a un bloque con una utilidad
// para poder utilizarlo de nuevo, sin escribir el mismo
// codigo otra vez

// function sumar(){ //aqui se declara la funcion
//     let a = 2;
//     let b = 2;
//     let sumar = a + b;
//     console.log(sumar);
//     //Aqui se especifica lo que la funcion va a hacer
// }
// sumar(); //Aqui llamamos la funcion para que se ejecute

//una funcion debe tener no mas de dos tareas especificas

//Return: se usa para q nos devuelva un valor, para que haga algo
// es decir para q la funcion tenga un valor, y no solo haga lo
// que debe
// function restar(){
//     let a = 3;
//     let b = 2;
//     let resta = a- b;
//     return resta; //retorna un valor y finaliza la funcion
//     alert("esto no se mostrara");
    
// }

// let resultado = restar();

// console.log(resultado);
//muestra el valor de "resta", ya q fue lo que la funcion retorna


//Las funciones no son funciones sin "parametros"


// let num1, num2; // declaramos las variables donde ingresaremos
// //parametros

// num1= prompt("dime un numero");
// num2= prompt("dime otro");
//Dejamos que el usuario decida q numeros multiplicar

// function multiplicar(num1, num2 /*Estos son los parametros */) {
//     let multiplicacion = num1 * num2;
//     return multiplicacion;
// }

// let resul = multiplicar(num1, num2); //aqui le asignamos valores
// // a los parametros

// console.log("bro los multiplique y dio: " + resul); 


//esto lo muestra en la consola

// Funciones flecha
// Es un tipo de funcion resumida

const saludar = () => console.log("hola");
saludar();

// HISTORIA DE KOFLA
// UN JOVEN MUY AFORTUNADO LOGRO GANAR EL PRIMER PREMIO DE LA LOTERIA 
// (EL INDIGENTE A QUIEN KOFLA LE DIO LA PLATA) EL CUAL DECIDIO HACER
// UNA FIESTA PARA PODER CELEBRAR ESTA SITUACION. EL TIPO COMPRO UNA
// MAQUINA QUE TAN SOLO DEJA PASAR A LOS MAYORES DE EDAD. LA PRIMERA
// PERSONA QUE ENTRE DESPUES DE LAS 2AM NO PAGA.

// 1)LOS MAYORES DE EDAD SOLO ENTRAN
// 2)EL PRIMERO DESPUES DE LAS 2AM y anets de las 7 NO PAGA

// let free = false;

// const validarCliente = (time) =>{
//     let edad = prompt("Cual es tu edad?");
//     if (edad >= 18) {
//         if (time >= 2 && time <= 7 && !free) {
//             alert("Puedes pasar gratis loco");
//             free = true;
//         } else{
//             alert(`Son las ${time} puedes pasar pero paga`);
//         }
//     } else {
//         alert("sorry bro sos re menor");
//     }
// };
// validarCliente(23);
// validarCliente(15);
// validarCliente(10);
// validarCliente(5);
// validarCliente(2);
// validarCliente(6);

// KOFLA VUELVE DE LA 
// COMISARIA EXHAUSTO, AL DIA SIGUIENTE COMENZABA EL CICLO BASICO
// DE LA UNIVERSIDAD. EN SU CURSO SON 19 ALUMNOS EN TOTAL. PERO 
// SURGIO UN PROBLEMA QUE COMPLICO LA FACULTAD, SE ROMPIO EL REGISTRO
// DE ASISTENCIA Y DURANTE LOS SIGUIENTES 30 DIAS NO SE PODRAN
// HACER NUEVOS REGISTROS DE NINGUN TIPO. POR LO Q LAS CLASES NO
// COMENZARAN HASTA Q ESTE ARREGLADO

// 1)CREAR MINI SISTEMA PARA REGISTRAR PRESENTES(P) Y AUSENTES(A)
// 2)PASADOS 30 DIAS MOSTRAR LA SITUACION FINAL DEL ALUMNO
// 3)MAXIMO DE 10% DE AUSENCIAS

// let cantidad = prompt("cuantos alumnos son?");
// let alumnosTotales = [];

// for(let i = 0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)), 0];

// };

// const tomarAsistencia = (nombre, p) => {
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales[p][1]++;
//     };
// };
// for(i = 0; i < 10; i++){
//     for (alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     };
// };
// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}:<br> 
//     Presentes: ${alumnosTotales[alumno][1]} <br>
//     Ausencias: ${30 - alumnosTotales[alumno][1]}
//     `;
//     if (10 - alumnosTotales[alumno][1] > 1) {
//         resultado+= "Reprobado por inasistencias <br>"
//     } else {
//         resultado+= "<br><br>";
//     };
//     document.write(resultado);
// };


// KOFLA FELIZ POR SU PRIMER DIA DE CLASES VUELVE A CASA
// CON SU PRIMER TAREA DE CALCULO, DONDE LA SUMA, RESTA,
// MULTIPLICACION, Y DIVISION SERAN INDISPENSABLES. POR LO QUE
// DEBEMOS CREAR UNA CALCULADORA Q EFECTUE ESTAS ACCIONES POR
// NOSOTROS

// 1)CREAR CALCULADORA Q NOS SIMPLIFIQUE EL TRABAJO

// const sumar = (num1, num2) =>{
//     return parseInt(num1) + parseInt(num2);
// };
// const restar = (num1, num2) =>{
//     return parseInt(num1) - parseInt(num2);
// };
// const multiplicar = (num1, num2) =>{
//     return parseInt(num1) * parseInt(num2);
// };
// const dividir = (num1, num2) =>{
//     return parseInt(num1) / parseInt(num2);
// };
// alert("Que operacion quieres efectuar");
// let operacion=prompt("1-suma,2-resta,3-multiplicacion,4-division");

// if (operacion == 1) {
//     let num1 = prompt("Dame el primer numero");
//     let num2 = prompt("Dame el segundo numero");
//     resultado = sumar(num1, num2);
//     alert(`El resultado es ${resultado}`);
// } else if (operacion == 2) {
//     let num1 = prompt("Dame el primer numero");
//     let num2 = prompt("Dame el segundo numero");
//     resultado = restar(num1, num2);
//     alert(`El resultado es ${resultado}`);
// } else if (operacion == 3) {
//     let num1 = prompt("Dame el primer numero");
//     let num2 = prompt("Dame el segundo numero");
//     resultado = multiplicar(num1, num2);
//     alert(`El resultado es ${resultado}`);
// } else if (operacion == 4) {
//     let num1 = prompt("Dame el primer numero");
//     let num2 = prompt("Dame el segundo numero");
//     resultado = dividir(num1, num2);
//     alert(`El resultado es ${resultado}`);
// } 

// CIERRA CAPITULO 2

// EMPIEZA CAPITULO 3

// POO(PROGRAMACION ORIENTADA A OBJETOS)
// Nos sirve para programar objetos como los hariamos en la vida
// real. Es un paradigma que intenta mejorar la forma de programar
// objetos.
// Clases de objetos: es una plantilla creada con la cual podemos
// crear objetos, una fabrica de objetos.
// OBJETOS: Los objetos tienen caracteristicas q los definen.
// Atributos de objetos: son las propiedades o caracteristicas
// que tiene un objeto
// Metodos de objetos: son las acciones q pueden hacer
// nuestros objetos
// Contructor: es una funcion obligatoria, el cual nos va a 
// construir las propiedades de un objeto.

// class animal { //crea la platilla de un objeto
//     constructor/*el constructor del objeto*/ 
//     (tipo, raza, nombre, age, color){/*los atributos del objeto*/
//         this.tipo=tipo;
//         this.raza = raza;
//         this.nombre = nombre;
//         this.age = age;
//         this.color = color;
//         // esto se encarga de asignarle los atributos al objeto
//         this.info = `${this.raza}: Soy ${this.nombre} tengo ${this.age} años de edad y soy de color ${this.color}`;
//     };
//     verInfo = () =>{
//        return this.info;
//     };
//     // una funcion se le llama metodo cuando es creada 
//     // dentro de una clase    
//     ruido = () =>{
//         if (this.tipo == 1) {
//             return "WOF!!";
//         } else if(this.tipo == 2){
//             return "MIAU!!";
//         } else if(this.tipo == 3){
//             return "dAmE QueSO!!";
//         } else{
//             alert("Elije 1, 2 o 3 pendejo");
//         };
//     };
//     // Un metodo que trabajara de acuerdo a la opcion q elija el usuario
//     static feliz = () =>{
//         return "Estoy muy feliz uwu!!";
//     };
//     // Esto se mostrara asi el objeto sea o no creado 
    
// };
// // HERENCIA:Es una clase q va a tomar una clase y todo lo q puede
// // hacer esa clase, pero ademas se le agregan cosas nuevas
// class Perro extends animal { //con extends heredamos las propeidades de animal
//     constructor(tipo, raza, nombre, age, color, peso, familia, altura){ //le agregamos otra propiedad
//         super(tipo, raza, nombre,  age, color);
//         // Tiene los valores hererdados de la clase animal
//         this.familia = familia;
//         this.peso = peso;
//         this.altura = null;
//         this.infoMore = `Soy un ${this.familia} y peso: ${this.peso}kg.`;
//     };
//     infoFur = () =>{
//         return this.infoMore;
//     };
    
//     set ponerAltura(height){
//         this.altura = height;
//     };
//     // Los setters nos permiten insertar datos en las propiedades

//     get pedirAltura(){
//         return this.altura;
//     };
//     // Los getters nos permiten pedir datos de las propiedades de un obejto
// };
// let tipo = prompt("Que animal quieres crear? 1-Perro, 2-Gato o 3-Raton");
// // Necesitamos este valro para q el metodo dentro de animal funcione
// esp = () => {   
//     if (tipo == 1) {
//         return "Perro";
//     } else if(tipo == 2){
//         return "Gato";
//     } else if(tipo == 3){
//         return "Raton";
//     };
// };
// let raza = esp();
// // Dejamos que el usuario decida entre tres opciones
// function decideName() {
//     let name = prompt("Como lo llamaras?");
//     cambiarNombre = prompt("Quieres cambiarle el nombre al animal? S-SI, N-NO");
//     if (cambiarNombre == "S") {
//         function changeIt(){   
//         let nuevoNombre = prompt("Que nuevo nombre quieres q tenga?");
//         let decide = prompt(`Entonces tu ${raza} se llamara: "${nuevoNombre}"? S-SI, N-NO.`);
//         if ( decide == "S"){
//             return nuevoNombre;
//         } else{
//             decideName();
//         }
//        };
//        return changeIt();
//     } else{
//        function confirmation(){
//         let decide = prompt(`Entonces tu ${raza} se llamara: "${name}"? S-SI, N-NO.`);
//         return decide;
//        }
//        let decide = confirmation();
//        if (decide == "S") {
//            alert(`Tu ${raza} se llama ${name}`);
//            return name;
//        } else if (decide == "N"){
//            decideName();             
//        };
//        return confirmation();
//     };
// };
// let nombre = decideName();
// let age = prompt("cuantos años tiene?");
// let color = prompt("de que color es?");
// let peso = prompt("cuanto pesa?");
// let familia =prompt("que raza es?");
// function addHeight() {
//     let altura = prompt("cuanto mide el animal?");
//     let confirmation = prompt(`Entonces tu ${raza} llamado: "${nombre} mide ${altura}? S-Si, N-No`);
//     if (confirmation == "S") {
//         alert(`Tu ${raza} mide ${altura}`);
//         return altura;
//     } else {
//         alert("Entonces...");
//         addHeight();
//     };
// }
// let altura = addHeight();
// // Con esto dejamos q el usuario especifique las propiedades 
// const newObject = new animal(tipo, raza, nombre, age, color); 
// //con esto creamos un nuevo objeto con las propiedades 
// // especificadas  
// const perro = new Perro(this.tipo, this.raza, this.nombre, this.age, this.color, peso, familia);
// // aqui le añadimos nuevas propiedades al objeto
// // Las clases se tienen que definir con const
// perro.ponerAltura = altura;
// console.log(newObject.verInfo() + ". " + perro.infoFur() + ". " + newObject.ruido() + ", " + animal.feliz() + "mido:" + perro.altura);

// let pedirAltura = prompt(`Quieres saber cuanto mide ${nombre}? S-Si, N-NO`);
// if (pedirAltura == "S") {
//     alert(perro.pedirAltura + "Master");
// } else{
//     alert("tabien (Y)");
// };
// Declaramos una variable que toma el valor
// del metodo del objeto
// ABSTRACCION: Es intentar reducir un objeto a sus componentes basicos

// MODULARIDAD: Es dividir algo por parte para observarlo
// mejor y resolver cada problema poco a poco. Para luego unirlos

// ENCAPSULAMIENTO: Nos permite encapsular los datos para que no se pueda
// acceder a ellos desde otros lugares

// POLIFORMISMO: Nos muetra como el objeto se comporta diferentemente
// al mismo metodo, debido a sus propiedades


// HISTORIA DE KOFLA
// KOFLA ENTRO EN UNA TIENDA DE CELULARES, PORQUE LE PARECIO BIEN COMPRAR
// UN NUEVO CELULAR. DE TODOS LOS MODELOS QUE HABIAN DISPONIBLES
// A KOFLA LE LLAMO LA ATENCION TRES MODELOS EN ESPECIFICO.
// EL PROBLEMA ES QUE LOS VENDEDORES NO SABEN ABSOLUTAMENTE NADA
// ACERCA DE ELLOS, POR LO QUE NO PÚEDEN DECIR NADA PARA RECOMENDARLE A
// KOFLA. ANTES DE COMPRARLOS QUIERE VER LAS CUALIDADES Y COMPORTAMIENTOS
// DE CADA UNO.

// 1)CREA UN PROGRAMA QUE MUESTRE LAS PARTICULARIDADES DE LOS TRES CELULARES
// 2)CADA UNO DEBE TENER COLOR, PESO, RESOLUCION DE PANTALLA Y CAMARA, Y MEMORIA
// RAM.
// 3)DEBEN PODER PRENDER, REINICIAR, TOMAR FOTOS Y GRABAR.

class Celular{
    constructor(color, peso, rdp, rdc, ram, precio, codigo){
        this.color=color;
        this.peso=peso;
        this.rdp=rdp;
        this.rdc=rdc;
        this.ram=ram;
        this.precio=precio;
        this.codigo=codigo;
        this.on=false;
        this.info = `Este celular es de color ${this.color}, pesa: ${this.peso}, tiene una resolucion de pantalla de ${this.rdp} pulgadas y la calidad de grabacion es de ${this.rdc} y cuesta ${this.precio}`;
    };
    darInfo(){
        return this.info;
    };
    darCodigo(){
        return this.codigo;
    };
    encender(){
        if(this.on=false){
            alert("Encendiendo celular");
            alert("celular prendido");
            this.on=true;
        } else{
            alert("El celular ya esta encendido");
        };
    };
    apagar(){
        if(this.on=true){
            alert("Apagando celular");
            alert("celular Apagado");
            this.on=false;
        } else{
            alert("El celular ya esta apagado");
        };
    };
    reiniciar(){
        if(this.on=true){
            alert("Reiniciando Celular");
        }else{
            alert("el celular esta apagado");
        };
    };
    tomarFoto(){
        alert(`foto tomada con una resolucion de ${this.rdc}`);
    };
    grabarVideo(){
        alert(`Video grabado con una resolucion de ${this.rdc}`);
    };
}
const celular1 = new Celular("Negro", "150g", "5", "1040p", "1GB", "50$", "CBDH");
const celular2 = new Celular("Rojo", "140g", "5", "720p", "2GB", "100$", "HOTY");
const celular3 = new Celular("Verde", "200g", "6", "full hd", "6GB", "300$", "ASDE");
const celular4 = new Celular("Amarillo", "120g", "4", "4k", "3GB", "150$", "LOPE");
const celular5 = new Celular("Rosado", "130g", "4", "1280p", "4GB", "200$", "MOFE");

function celulares() {
    let verCadaUno= prompt("Que celular quieres revisar? 1, 2, 3, 4 y 5");
    parseInt(verCadaUno);

    let celulares =["", celular1, celular2, celular3, celular4, celular5];
    let info = celulares[verCadaUno].darInfo();
    let codigo = celulares[verCadaUno].darCodigo();
    celulares[verCadaUno].encender();
    alert(info);
    let capturar= prompt("quieres tomar una foto o grabar un video? F-Foto, V-Video, N-No quiero hacer ninguna");
    if (capturar == "F") {
        alert("Tomando Foto");
        celulares[verCadaUno].tomarFoto();
    } else if(capturar == "V"){
        alert("Grabando Video");
        celulares[verCadaUno].grabarVideo();
    } else{
        alert("ok (Y)");
    };
    let apagar = prompt("Quieres Apagar el Tlf? S-SI, N-NO");
    if (apagar == "S") {
        celulares[verCadaUno].apagar();
        let decide = prompt("Quiere ver otro celular? S-SI, N-NO");
        if (decide == "S") {
            celulares();
        } else{
            alert("Humildemente le pedimos que se largue");
        };
    } else if (apagar == "N"){
        let decide = prompt("Quiere comprar el celular? S-SI, N-NO");
        if (decide == "S") {
            alert(`Informacion sobre el celular: ${info}`);
            alert(`su codigo es: ${codigo}`);
        } else{
            alert("Entonces vea otro celular...")
            let decide = prompt("Quiere ver otro celular? S-SI, N-NO");
            if (decide == "S") {
                celulares();
            } else{
                alert("Humildemente le pedimos que se largue");
            };
        };
    };
};
celulares();
 
// KOFLA NO ESTA SATISFECHO CON LA SECCION ANTERIOR POR LO QUE VA A LA SECCION
// DE CELULARES DE ALTA GAMA. AHI ENCONTRARA LOS CELULARES MAS CAROS DE LA
// TIENDA, DONDE VIO DOS CELULARES QUE LES PARECIO FABULOSOS, 
// ESTOS DOS CELULARES QUE VIO PUEDEN HACER TODO LO QUE LOS ANTERIORES
// PERO ADEMAS PUEDEN HACER COSAS MEJORES. PUEDEN GRABAR EN SUPER CAMRARA LENTA,
// TIENEN RECONOCIMIENTO FACIAL Y UNA CAMARA EXTRA

// 1)Implementar todas estas cualidades pero en los celulares de alta gama.

// KOFLA AHORA TIENE SU NUEVO CELULAR Y ESTA MIRANDO LAS APLICACIONES
// DEL PLAYSTORE YA QUE QUIERE JUGAR JUEGOS POPULARES, PERO LAS 7 APPS QUE
// LLAMARON SU ATENCION SON UN TANTO SIMILARES LO QUE SIGNIFICA QUE EN CASO
// QUE LAS DESCARGUE LAS JUGARIA TODAS POR LO QUE DESCARGARA SOLO DOS
// PARA EVITAR PERDER TANTO TIEMPO JUGANDO. EL PROBLEMA ES SU INDECISION
// ENTRE LAS 7 APPS.

// 1)CREAR UN SISTEMA QUE AYUDE A KOFLA A DECIDIR CUAL APP DESCARGAR-
// 2)DEBEN CONTENER LA CANTIDAD DE DESCARGAR, PUNTUACION Y PESO
// 3)SE DEBEN PODER INSTALAR, ABRIR, CERRAR Y DESINTALAR

// TERMINA CAPITULO 3


// EMPIEZA CAPITULO 4





