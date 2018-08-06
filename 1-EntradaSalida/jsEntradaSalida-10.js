/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numImporte = parseInt(document.getElementById("importe").value);
	var calcDescuento = numImporte - ((numImporte * 25)/100);
	document.getElementById("resultado").value = calcDescuento;	
}
