function mostrar()
{
	var valEdad = parseInt(document.getElementById("edad").value);
	var valEstadoCivil = document.getElementById("estadoCivil").value;

	if (valEdad < 18 && valEstadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

}//FIN DE LA FUNCIÓN
