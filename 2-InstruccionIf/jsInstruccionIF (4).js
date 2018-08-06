function mostrar()
{
	var valEdad = parseInt(document.getElementById("edad").value);  
	if (valEdad >= 18)
	{
		alert("Eres mayor de edad.");
	}
	else
	{
		if (valEdad >=12 && valEdad<=17)
		{
				alert("Eres puberto.");
		}
		else
		{
			alert("chichon de piso");
		}
	}  



}//FIN DE LA FUNCIÓN
