// Dime si el nombre empieza por P

// entre 0 y n ocurrencias .*
// La i se añade para que sea keySensitive
// ^ El sombrerito exije que empiece por lo que tiene a continuación
let pattern = /^p.*/i; 

let resultado = pattern.test("Pepe");
console.log("Ejercicio1: ", resultado);

// Ejercicios practios, buscar numeros entre el 1 y el 4.
let pattern2 = /[1-4]/g;
let resultado2 = pattern.test("1235")
// Nos devuelve si en una cadena hay numeros entre el 1 y el 4
console.log("Ejercicio2: ", resultado2);

// Comprobamos si la matricula de un coche es valida.
// 4 digitos y 3 letras. -> 1234AZT
// [0-9]{4} Quiro 4 numeros entre el 0 y el 9
// Operador $ se pone al final y significa final de expresion
let pattern3 = /([0-9]{4}[A-Z]{3}|[A-Z][0-9]{4}[A-Z]{2})/g;
let arrayMatriculas = ["1234ATZ","123AATZ"]

arrayMatriculas.forEach(element=>{
    console.log(element, pattern3.test(element))
})

// Funcionamiento del Match, encontraremos las matriculas en medio del texto
let textoPolicial = `Hemos puesto un radar de velocidad en la B-20; el turismo con matricula 1245ATD fue multado por exceso de velocidad, asi como el camion identificado por 8899RTY`
console.log(textoPolicial.match(pattern3));

// PIPES podemos hacer una expresion regular que se divida por una barra | de forma que coincida uno u otro.
// Operador interrogante ? -> Cuantificadores el interrogante significa que puede tener o puede no tener un algo /10?/g un uno seguido o no de un 0.
// Operador mas + -> Por lo menos uno de los caracteres de la izuierda. 
// la diferencia con el asterisco * es que por lo menos tiene que existir 1
// $ Final del pattern.
// Se puede hacer un rango de digitos /\d{3,4}/g -> Significa un digito que tenga entre 3 o 4 numeros.

let textoProceso = textoPolicial.replaceAll(pattern3,"PILLADO");
console.log(textoProceso);
