function mostrar() {
    let mes = document.getElementById("mes").value;

    switch (mes) {
        case "Enero":
            alert("Que comiences bien el año");
            break;
        case "Marzo":
            alert("A clases");
            break;
        case "Julio":
            alert("Se vienen las vacaciones");
            break;
        case "Diciembre":
            alert("Felices fiestas");
            break;
        default:
            alert("Es alguno de los otros meses");
    }

}//FIN DE LA FUNCIÓN