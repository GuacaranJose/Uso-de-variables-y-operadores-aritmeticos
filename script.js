//--------------------------1-------------------//

console.log("smdmm");


let numero1 = +prompt("Ingresa numero 1 > 0");
let numero2 = +prompt("Ingresa numero 2 > 0");


let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;


console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicacion:", multiplicacion);
console.log("Division:", division);
console.log("Modulo:", modulo);

//-------------------------------2---------------//

onsole.log("ASD");

let transfDias = +prompt("Colocar un numero de dias para transformar");

//Calculos
let anos = Math.floor(transfDias / 365);
let sobrante1 = transfDias % 365;
let semanas = Math.floor(sobrante1 / 7);
let sobrante2 = sobrante1 % 7;
let dias = remanente2;

console.log(
  "Los dias son equivalentes a:",
  anos,
  "años",
  semanas,
  "semanas",
  sobrante2,
  "dias"
);

//------------------------3---------------------//

console.log("conver-temp");

let gradosC = +prompt("Ingresa temperatura en °C");

let gradosK = gradosC + 273.15;
console.log("La temperatura en ° Kelvin es:", gradosK);

let gradosF = gradosC * (9 / 5) + 32;
console.log("La temperatura en ° Fahrenheit es:", gradosF);


//---------------------------4------------------//
console.log("Calculos 5 numeros");


let num1 = +prompt("Coloque el numero 1");
let num2 = +prompt("Coloque el numero 2");
let num3 = +prompt("Coloque el numero 3");
let num4 = +prompt("Coloque el numero 4");
let num5 = +prompt("Coloque el numero 5");

let sumaDe5 = num1 + num2 + num3 + num4 + num5;
let promedioDe5 = sumaDe5 / 5;


console.log("Suma de los 5:", sumaDe5);
console.log("Promedio de los 5:", promedioDe5);

