// En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
// a) El nombre de la persona con mas temperatura.
// b) Cuantos mayores de edad estan viudos
// c) La cantidad de hombres que hay solteros o viudos.
// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
// e) El promedio de edad entre los hombres solteros.



function mostrar()

{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let seguir;
	let maxTemperatura;
	let maxNombre;
	let contSolterosViudos = 0;
	let contEdad = 0;
	let contMayoresEdad = 0;
	let acumSolteros = 0;
	let promedio;
	flag = 1;
	
	do{
	
	nombre = prompt("Ingrese el nombre ");
	edad = parseInt(prompt("Ingrese el edad "));
	
	sexo = prompt("Ingrese el sexo (f - m)").toLocaleLowerCase();
	while(sexo != "m" && sexo != "f"){
	sexo = prompt("Error. Ingrese el sexo (f - m)".toLocaleLowerCase());
	}
	
	estadoCivil = prompt("Ingrese el estado civil (soltero - casado - viudo) ").toLocaleLowerCase();
	while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
		estadoCivil = prompt("Error. Ingrese el estado civil (soltero - casado - viudo) ").toLocaleLowerCase();
	}
	
	temperatura = parseFloat(prompt("Ingrese la temperatura "));


	// 
	
	if(sexo == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo")){
		contSolterosViudos++;
	}

	if(edad > 60 && temperatura >38){
		contEdad++;
	} else if(edad > 18 && estadoCivil == "viudo") {
		contMayoresEdad ++;

	}

if(flag ||temperatura > maxTemperatura){
	maxTemperatura = temperatura;
	maxNombre = nombre;
	flag = 0;
}

seguir = prompt ("Desea cargar otra persona (s/n)?");
} while(seguir == 's');

console.log("a - El nombre de la persona con más temperatura es " + maxNombre);
console.log("b - Los mayores de edad y viudos" + contMayoresEdad);
console.log("c - La cantidad de hombres solteros y viudos" + contSolterosViudos );
console.log("d - Personas de la tercera edad con temperatura mayor a 38°" + contEdad);

if(contSolteros != 0){
	promedio = acumSolteros / contSolteros;
	console.log("e - Promedio de edad entre los hombres solteros: " + promedio);
	} else{
		console.log("e - No se registraron hombres solteros");
	}





	
}
