function mostrar()
{ 
	var mesDelAño = document.getElementById('mes').value;

	if (mesDelAño != "Febrero")
	{
		mesDelAño = "Otros";
	}

	switch (mesDelAño)
	{
		case "Febrero":
			{
				alert("Este mes no tiene más de 29 días.");
				break;
			}
		case "Otros":
			{
				alert("Este mes tiene 30 o más días");
				break;
			}
	}





}//FIN DE LA FUNCIÓN
