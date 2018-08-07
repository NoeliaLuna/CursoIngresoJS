function mostrar()
{
	var valSumaTotal=0;	
	var valCont = 1;
	var valNotaBaja = 10;
	var valNotaBajaSexo;
	var valCantVarones=0;

	while (valCont<6)
	{
		var valNota = parseInt(prompt("Ingrese la nota","nota entre 0 y 10")); 
		var valSexo = prompt("Ingrese el sexo","f o m"); m
		

		if ((valNota>=0 && valNota <= 10)&&(valSexo=="f"||valSexo=="m"))
		{
			valSumaTotal= valSumaTotal + valNota;
			alert("Estoy adentro "+valCont);
			
			if(valSexo=="m" && valNota >=6)
			{
				valCantVarones=valCantVarones+1;
			}
			/*if (valNota < valNotaBaja)
			{
			valNotaBaja = valNota; 
			valNotaBajaSexo = valSexo; 
			}*/
		}
		else
		{
			alert("Ingrese valores validos.");
		}
		
		
	}

	alert("El promedio de notas totales es de "+(valSumaTotal/(valCont-1)));
	alert("La nota mas baja fue "+valNotaBaja+"y del sexo "+valNotaBajaSexo);

}
