function mostrar()
{
	var valLetra, valNumero;
	var valCont=0;
	var valContinuar = "s";

	while(valContinuar = "s")
	{
		valNumero=parseInt(prompt("Ingrese un numero valido entre -100 y 100","-50"));
		valLetra=prompt("Ingrese una Letra","f");

		if(valNumero>=-100 && valNumero <=100)
		{
			



			
			alert("Queres contuniar? (s = si, n = no)","s o n");
		}
		else 
		{
			alert("Fijate lo que ingresas.");
			alert("Queres contuniar? (s = si, n = no)","s o n");
		}
	}

}

