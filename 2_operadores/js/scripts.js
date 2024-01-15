// Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -84);

// Operações Aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(5 / 4);
console.log(5 * 4);
console.log(5 + (4 * 8))

// Special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// Strings
console.log("Um texto");
console.log('Mais um texto');
console.log("43");
console.log(typeof "Um texto");
console.log(typeof 'Mais um texto');

// Simbolos especiais em string
console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab");

// Concatenação
console.log("oi, " + "tudo " + "bem?");

// Templates strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// boolean
console.log(true);
console.log(5 > 20);
console.log(30 > 2);

// Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 != 10);

// Comparações idêntico
console.log(9 == "9");
console.log(9 === "9");
console.log(9 !== "9");

// Operadores Lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 3 > 1);
console.log(5 > 2 && "Mateus" === 1);
console.log(5 > 2 || "Mateus" === 1);
console.log(!5 > 2);

// Empty values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(undefined == false);

// Mudança de tipos
console.log(5 * null);
console.log("teste" * "ops");
console.log("10" + 1);
console.log("10" - 1);