/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1 = document.getElementById("numeroUno").value;
	var numero2 = document.getElementById("numeroDos").value;

	var resultado = parseInt(numero1)+parseInt(numero2);
	alert("La suma es "+ resultado);
}
function restar()
{
	var nuemero1 = document.getElementById("numeroUno").value;
	var nuemero2 = document.getElementById("numeroDos").value;
	var resultado = parseInt(nuemero1) - parseInt(nuemero2);
	alert("La resta es "+ resultado);
}

function multiplicar()
{ 
	var nuemero1 = document.getElementById("numeroUno").value;
	var nuemero2 = document.getElementById("numeroDos").value;
	var resultado = parseInt(nuemero1) * parseInt(nuemero2);
	alert("La multiplicación es "+ resultado);
}

function dividir()
{
	var nuemero1 = document.getElementById("numeroUno").value;
	var nuemero2 = document.getElementById("numeroDos").value;
	var resultado = parseInt(nuemero1) / parseInt(nuemero2);
	alert("La división es "+ resultado);
}
