var nombreCompleto = 3;
var apellido = 'Mareco';
nombre = 'Alejandro Julian';
var numero1 = 0;
var numero2 = 0;
var res = 0;
res = numero1 + numero2;
//  alert(res);
var numero3 = 1;
var numero4 = 2;
var res2 = 0;
res2 = ++numero3;
res3 = numero4++;
//  alert(res2);
//  alert(res3);

var globales = 10; 

var num = 2;
var res5 = 1;
res += num;
//alert(res5);

var incrNum = 0;
//alert(incrNum++);

var decrNum = 5;
//alert(--decrNum);

var boleano = true;
//alert(!boleano);
var boleanoDos = false;
//alert(boleano&&boleanoDos);

//alert(nombreCompleto==apellido);
//alert(nombreCompleto!=apellido);

//alert((10>=9)? "si" : "no");

res5= void(1+2);
//alert(res5);
//alert(typeof("hola") == "string");

function sumaDosNUmeros(numero){

  return numero + 5;
}
sumaDosNUmeros(5);
//alert(res5);
res5 = sumaDosNUmeros(7);
//alert(res5);

var resultado, tipo;
function acelerar(velocidad){
  if(velocidad<=120){
    return;
  }
  alert(velocidad + "KM/HRS ojo!");
}
resultado = acelerar(100);
tipo= typeof(resultado);
//alert(tipo);

function variablesPrueba(){

  var globales = 99;
  return globales;
}

//alert(globales);
//alert(variablesPrueba());
var miCoche = { modelo: "ecosport", marca: "ford", año: "2016"};
//alert(miCoche.marca);

function coches(){

  this.marca;
  this.modelo;
  this.año;
}

var tuCoche = new coches();
tuCoche.marca = "chevrolet";
//alert(tuCoche.marca);

function sumar(){
  this.dosNumeros = function(numUno, numDos){

    return numUno + numDos  }
}

 var calculo = new sumar();

//alert( calculo.dosNumeros(2,3));

 function miObj(){

  this.obtenido = variablesPrueba;
 }

var unObj = new miObj();
alert(unObj.obtenido());