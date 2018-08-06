function mostrar()
{
	var valEdad = parseInt(document.getElementById("edad").value);  

	if (valEdad >=18)
	{
		alert("Adulto");
	}
	else 
	{
		if (valEdad<=17 && valEdad>=13)
		{
			alert("adolescente");
		}
		else
		{
			alert("niño");
		}
	}


}//FIN DE LA FUNCIÓN
