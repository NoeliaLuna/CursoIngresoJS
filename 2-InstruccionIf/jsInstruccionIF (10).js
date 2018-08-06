function mostrar()
{
	var numRandom = Math.floor(Math.random()*10)+1;

	if (numRandom == 9 || numRandom == 10)
	{
		alert("EXCELENTE, te sacaste un " + numRandom);
	}
	else if (numRandom <= 8 && numRandom >=4)
	{
		alert("APROBO, te sacaste un " + numRandom);
	}
	else if (numRandom <4 && numRandom >=0) 
	{	
		alert("Tu nota fue un "+ numRandom +"... Mas suerte para proxima");
	}

}//FIN DE LA FUNCIÓN
