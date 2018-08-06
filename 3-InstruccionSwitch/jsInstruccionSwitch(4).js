function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

	if (mesDelAño=="Abril"||mesDelAño=="Junio"||mesDelAño=="Septiembre"||mesDelAño=="Noviembre")
	{
		mesDelAño = "dias30";//30 = Abril Junio Septiembre Noviembre
	}
	else if (mesDelAño=="Enero"||mesDelAño=="Marzo"||mesDelAño=="Mayo"||mesDelAño=="Julio"||mesDelAño=="Agosto"||mesDelAño=="Octubre"||mesDelAño=="Diciembre") 
	{
		mesDelAño = "dias31";//31 =  Enero Marzo Mayo Julio Agosto Octubre Diciembre
	}
	switch (mesDelAño)
	{
		case "Febrero":
			{
				alert("Este mes tiene 28 dias");
				break;
			}
		case "dias30":
			{
				alert("Este mes tiene 30 dias");
				break;
			}
		case "dias31":
			{
				alert("Este mes tiene 31 dias");
				break;
			}
	}
	
	



}//FIN DE LA FUNCIÓN
