/*var nombreCompleto = 3;
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

//capitulo 7

var buleana = new Boolean(1);
//alert(buleana);

var numerico = new Number(5.543);
//alert(Number.MIN_VALUE);
//alert(numerico.toExponential(1));
//alert(numerico.toFixed(3));
//alert(numerico.toPrecision(3));

var cadena = new String("hola");
//alert(cadena.length);
var txtMayus;
txtMayus = cadena.toUpperCase();
cadena = cadena.concat(" jaja");
//alert(txtMayus + "\n" + cadena);

var vector;
vector = new Array();
vector[0] = 3;
vector[1] = "hola";
//alert(vector);


var semana1 = new Array("lunes", "martes", "jueves");
var semana2 = new Array("miercoles", "viernes");

function compararLongitud(cadena1, cadena2){
  if(cadena1.length > cadena2.length){
    return 1;
  }else if(cadena1.length < cadena2.length) {
    return -1;
  }else{
    return 0;
  }
}

//alert(semana1.sort());
//alert(semana2.sort(compararLongitud));

semana1[3] = "miercoles";
semana1[4] = "viernes";
semana1[5] = "sabado";
semana1[6] = "domingo"

var dias = " ";

for(var i = 0; i<semana1.length; i++){
  dias = dias + semana1[i] + '\n ';
}
//alert(dias);

var asignaturasLetras = new Array("historia", "latin", "filosofia");
var asignaturasCiencias = new Array("fisica", "quimica", "matematicas");
//alert(asignaturasCiencias + "\n" + asignaturasLetras);

var aula1 = new Array(asignaturasLetras, asignaturasCiencias);
//alert(aula1);
//alert(aula1[1][2]);

function restar(num1, num2){
  var operacion = "";
  if(arguments.length == 2){
    var resultado = num1-num2;
    operacion = arguments[0] + " - " + arguments[1] + ": ";
  } else{
    var resultado = "no hay 2 numeros";
  }
  alert( operacion + resultado);
}

//restar();
//restar(8);
//restar(8,2)

var fechaActual = new Date('December 31, 2008 23:15:30 GMT-3:00');
//alert(fechaActual.getUTCFullYear());
var fecha = fechaActual.setFullYear(2010);
//alert(fechaActual.setDate(2));
//alert(fechaActual.toDateString());

var nacimiento = new Date(1975, 0, 30);
var hoy = new Date();
var edadMilisegundos = hoy - nacimiento;
var edad = parseInt(edadMilisegundos / 1000 / 60 / 60 / 24 / 365);
//alert(edad);

var edadConMetodos = new Date(edadMilisegundos);
//alert(edadConMetodos.getFullYear()-1970);

function calcularEdad(nacimiento){
  var actualFecha = new Date();
  var años = actualFecha.getFullYear() - nacimiento.getFullYear();
  if(actualFecha.getMonth() > nacimiento.getMonth()){

  }else if(actualFecha.getMonth() < nacimiento.getMonth()){
    años--;
  } else{
    if(actualFecha.getDate() < nacimiento.getDate()){
      años--;
    }
  }
  return años;
}

//alert(calcularEdad(nacimiento));

//alert(Math.random());
//alert(Math.sqrt(9));

var miPatron = new RegExp("\\d{2}-\\d{2}-\\d{4}");
//alert(miPatron.test("22-08-2022"));

var texto = "a b c d e";
alert(texto.split(/ /));
*/
// capitulo 8

//alert("la ventana mide: " + Window.outerWidth + " x " + Window.outerHeight + " pc\n" + " hay un espacio disp. de: " 
//  + Window.innerWigth + " x " + Window.innerHeight + "px");

//confirm("hola");
//prompt("hols");

/*
var nombre = prompt("Hola como te llamas?");
var boton = confirm("te gusta JS " + nombre + "?");
if(boton){
  alert(" ok ");
}else {
  alert("lamento");
} 

var ventana = window.open("mi_pag.html");
if(ventana==null){
  alert("no se pudo abrir ventana");
}

window.open("mi_pag.html", "ventana1", "width=500, heigth=500");
window.open("mi_pag.html", "ventana2", "width=500, heigth=500, top=100, left=100");
open("mi_pag.html", "ventana3", "toolbar=1, menubar=0, location=0");
*/

//setTimeout("alert(\" bienvenido\")", 5000);

/*var temp = setTimeout("alert(\" bienvenido\")", 10000);
var boton = confirm("cancelar ejecucion?");
if(boton){
  clearTimeout(temp);
}
*/
/*var temp;
function preguntar(){
  var boton = confirm("quieres continuar?");
  if(!boton){
t js    alert("hasta pronto");
    clearInterval(temp);
  }
}

temp = setInterval(preguntar, 5000);
*/

/*var temp , miNombre;

function preguntar(nombre){
  var boton = confirm("quieres continuar? " + nombre );
  if(!boton){
    alert("hasta pronto");
    clearInterval(temp);
  }
}

miNombre = prompt("como te llamas?");
temp = setInterval(function(){
  preguntar(miNombre);}, 5000);
*/

/*function mostrarMensaje(mensaje){
  alert(mensaje);
}

setTimeout(function(){
  var ahora = new Date();
  mostrarMensaje("son las: " + ahora.toLocaleTimeString());
  mostrarMensaje("gracias");
}, 5000);
*/

/*alert(navigator.appCodeName + " \n" + navigator.appName + " \n " + navigator.appVersion+ " \n " +
  navigator.userAgent + " \n " + navigator.lenguage + " \n " + navigator.plataform
 + " \n " + navigator.cookieEnabled + " \n " + navigator.geolocation + " \n " + navigator.onLine );
*/

//alert( screen.width + " \n " + screen.height + " \n " + screen.availHeight + " \n " + screen.availWidth + " \n " + screen.colorDepth);

//alert( href + " \n " + hostname + " \n " + pathname + " \n " + hash + " \n " + search + " \n " + port + " \n " + host + " \n " + protocol);

/*location.href = "pagina3.php";
location.href = "cursos/pagina3.php";
location.replace("http://www.google.com");
*/
/*alert(document.lastModified);

document.write("insertar txt desde js");

var elemento = document.getElementById("txt1");
if(elemento!=null){
  alert("existe ");
} else{
  alert("no extiste");
} 
var i = document.getElementsByTagName("p");
alert(i.length);
*/

/*with(document.anchors[0]){
  alert(id);
}

*/
/*var a = "hola";
with(document.link[0]){
  a = id;
}

alert(a);
*/

//capitulo 9























