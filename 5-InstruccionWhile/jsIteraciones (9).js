function mostrar()
{

	var flag=0;
	var numero;
	var maximo=0;
	var minimo=0;
	var seguir;
	var respuesta="si";
do {
	numero = parseInt(prompt("Ingrese un numero: "));
	while (isNaN(numero))
	{
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
	}
	if (flag == 0 || numero > maximo)
	{ 
		maximo = numero;
	}
	if (flag == 0 || numero < minimo)
	{
		minimo = numero;
		flag = 1;
	}
	
		seguir = prompt("Quiere ingresar otro numero?");
		
}
while (seguir == "s");

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN