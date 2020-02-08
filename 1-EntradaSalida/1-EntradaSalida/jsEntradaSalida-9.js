/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo
var aumento
var sueldoConAumento
sueldo = parsefloat (document.getElementById(´sueldo).value);
aumento = sueldo * 10/100;
sueldoConAumento = sueldo + aumento;
document.getElementById("resultado").value = sueldoConAumento;
	
}
