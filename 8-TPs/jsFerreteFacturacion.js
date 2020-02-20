/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var preciouno
    var preciodos
    var preciotres
    var resultado
    preciouno = parseInt (document.getElementById("PrecioUno").value);
    preciodos = parseInt (document.getElementById("PrecioDos").value);
    preciotres = parseInt (document.getElementById("PrecioTres").value);
    resultado = preciouno + preciodos + preciotres
    alert ("La suma es " + resultado);
	
}
function Promedio () 
{var preciodos
    var preciotres
    var resultado
    preciouno = parseInt (document.getElementById("PrecioUno").value);
    preciodos = parseInt (document.getElementById("PrecioDos").value);
    preciotres = parseInt (document.getElementById("PrecioTres").value);
    resultado = (preciouno + preciodos + preciotres) / 3
    alert ("El promedio es " + resultado);
	
}
function PrecioFinal () 
{var preciodos;
    var preciotres;
    var resultado;
    preciouno = parseInt (document.getElementById("PrecioUno").value);
    preciodos = parseInt (document.getElementById("PrecioDos").value);
    preciotres = parseInt (document.getElementById("PrecioTres").value);
    resultado = (preciouno + preciodos + preciotres) * 1.21
    alert ("El precio final incluido IVA es " + resultado);
	
}