function mostrar()
{
	var valEdad = parseInt(document.getElementById("edad").value);
	var valEstadoCivil = document.getElementById("estadoCivil").value;

	if (valEdad >= 18 && valEstadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}
}//FIN DE LA FUNCIÓN
