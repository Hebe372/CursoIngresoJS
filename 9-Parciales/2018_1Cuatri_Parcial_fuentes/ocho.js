function mostrar()
{
    var numero;
    var letra;
    var acumuladorNumeros = -100;
    var contadorPares;
    var acumuladorPares;
    var contadorImpares;
    var acumuladorImpares;
    var contadorCeros;
    var acumuladorCeros;
    var promedioPositivos;
    var sumaNegativos;
    var flag = 0;
    var numeroDelAlto;
    var numeroDelBajo;
    var letraDelAlto;
    var letraDelBajo;
    var i >= -100;
    
    
        // pido nota y la valido
        
        numero = parseInt(prompt("Ingrese numero(-100 a 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese numero (-100 a 100): "));
           i++ 
        }
        // pido sexo y lo valido
        letra = prompt("Ingrese letra: ");
        // while (letra != "f" && letra != "m") {
           // sexo = prompt("Sexo invalido. Ingrese sexo: ");}

        acumuladorNumeros = acumuladorNumeros + numero;

        if (numero < numeroBajo || flag == 0) {
            numeroBajo = numero;
            letraDelBaj0 = letra;
            flag = 1;
        }
        acumuladorNumeros = acumuladorNumeros + numero;

        if (numero > numeroAlto || flag == 0) {
            numeroAlto = numero;
            letraDelAlto = letra;
            flag = 1;
        }

        if (acumuladorPares = acumuladorPares + numero) {
            contadorPares++;
        }

        if (acumuladorImpares = acumuladorImpares + numero) {
            contadorImpares++;
        }
        if (acumuladorCeros = acumuladorCeros + numero) {
            contadorCeros++;
        }
    }

    promedioPositivos = acumuladorPositivos / ContadorPositivos;
    sumaNegativos = acumularNegativos;

    document.write("Cantidad de numeros pares: " + contadorPares + "</br>" 
    + "Cantidad de numeros impares: " + contadorImpares + "</br>" 
    + "Cantidad de ceros: " + contadorCeros + "</br>" 
    + "El promedio de los numeros positivos es: " + promedioPositivos + "</br>" 
    + "La suma de los numeros negativos es: " + sumaNegativos + "</br>" 
    + "Numero minimo y su letra son: " + numeroDelBajo + letraDelBajo + "</br>" 
    + "Numero maximo y su letra son: " + numeroDelAlto + letraDelAlto);

}
