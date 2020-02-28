function mostrar()
{
    var nota;
    var sexo;
    var acumuladorNotas = 0;
    var promedioNotas;
    var notaBaja;
    var sexoNotaBaja;
    var flag = 0;
    var contadorVaronesMas6 = 0;

    for (var i = 0; i < 5; i++) {
        // pido nota y la valido
        nota = parseInt(prompt("Ingrese nota(0-10): "));
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("Nota invalida. Ingrese nota(0-10): "));
        }
        // pido sexo y lo valido
        sexo = prompt("Ingrese sexo: ");
        while (sexo != 'f' && sexo != 'm') {
            sexo = prompt("Sexo invalido. Ingrese sexo: ");
        }

        acumuladorNotas = acumuladorNotas + nota;

        if (nota < notaBaja || flag == 0) {
            notaBaja = nota;
            sexoNotaBaja = sexo;
            flag = 1;
        }

        if (sexo == 'm' && nota >= 6) {
            contadorVaronesMas6++;
        }

    }

    promedioNotas = acumuladorNotas / 5;

    alert("Promedio notas: " + promedioNotas + "\nNota mas baja: " + notaBaja 
    + "\nSexo de la persona con nota baja: " + sexoNotaBaja 
    + "\nCantidad varones con nota >= 6: " + contadorVaronesMas6);

    
}
