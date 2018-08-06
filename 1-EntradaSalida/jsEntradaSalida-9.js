/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var numSueldo = parseInt(document.getElementById("sueldo").value);
	var calAumento = ((numSueldo*10)/100)+numSueldo;
	document.getElementById("resultado").value=calAumento;
}
