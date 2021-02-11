/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{let nombre;
 let edad;	
 nombre = document.getElementById("elNombre").value;
 edad=parseInt(document.getElementById("laEdad").value);
 alert("Usted se llama "+nombre+" y su edad es "+edad);
}

