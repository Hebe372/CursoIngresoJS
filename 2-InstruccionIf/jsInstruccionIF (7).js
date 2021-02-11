function mostrar()
{
    let edad;
    let estado;
    edad = parseInt(document.getElementById("edad").value);
    estado = document.getElementById("estadoCivil").value;
    
    if(edad < 18 && estado != "Soltero"){
        alert("Es muy joven para NO ser soltero");
    }

	//if(edad<18 && (estado == "Casado" || estado == "Divorciado")) {
    //   alert("Es muy joven para No ser soltero")
    //}
    // primero resuelve los parentesis
    //luego resuelve los relacionales y 
    // despues el operador lógico
    //if (edad < 18 && |(estado == "Soltero")) {
        //alert("Es muy joven para No ser soltero");
   // }

}//FIN DE LA FUNCIÓN