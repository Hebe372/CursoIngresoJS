function mostrar()
{
    var mes = document.getElementById("mes").value;

    switch (mes) {
        case "Febrero":
            alert("Este mes no tiene mas de 28 dias");
            break;
            case "Marzo":
                    alert("Este mes tiene 31 dias");
                    break;  
                    case "Enero":
                    alert("Este mes tiene 31 dias");
                    break; 
                    case "Mayo":
                            alert("Este mes tiene 31 dias");
                            break; 
                            case "Julio":
                            alert("Este mes tiene 31 dias");
                            break;
                            case "Agosto":
                            alert("Este mes tiene 31 dias");
                            break;
                            case "Octubre":
                            alert("Este mes tiene 31 dias");
                            break;
                            case "Diciembre":
                            alert("Este mes tiene 31 dias");
                            break;
        default:
            alert("Este mes tiene 30");
            break;
    }

}//FIN DE LA FUNCIÓN