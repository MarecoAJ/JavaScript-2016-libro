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
//alert(unObj.obtenido());

var sms, miPropiedad, unCoche;

function MiCoche(marca, modelo, color){

  this.marca = marca;
  this.modelo = modelo;
  this.color = color;

  this.arrancar = function(){ alert("arrank"); };
}

unCoche = new MiCoche("F", "U", "red");
 sms = " ";
for (miPropiedad in unCoche) {

 sms += "\t* " + miPropiedad + "\n";
}

//alert(sms);

cocheNuevo = new MiCoche("F", "U", "red");
 sms = " ";
for (miPropiedad in unCoche) {
  if(typeof(cocheNuevo[miPropiedad]) == "function"){
     sms += "\t* " + miPropiedad + "\' es un metodo. \n";
 cocheNuevo[miPropiedad]();
  } else{
  sms += "\t* " + miPropiedad + "\' no es un metodo. \n";
} 

} 

//alert(sms);

var colores = "blue";
 
with (cocheNuevo){
  alert(color);
}

var cocheWithUno, velocidadWith = 100;

function subirVelocidad(){

  velocidadWith += 20;
}

function cocheWithFun(marcas, modelos, colores){

  this.marcas = marcas;
  this.modelos = modelos;
  this.colores = colores;
  this.acelera = function(velocidadWith){alert(velocidadWith)};
}

cocheWithUno = new cocheWithFun("C", "C", "azul");

with(cocheWithUno){

  alert(marcas);
  alert(colores);
  alert(this.colores);
  acelera(velocidadWith);
  subirVelocidad();
  acelera(velocidadWith);

}


