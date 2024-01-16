// Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const items = ["Luiz", true, 2, 4.12, []];

console.log(items);

// Mais sobre arrays
const arr = ["a", "b", "c", "d", "d"];
console.log(arr[0]);
console.log(arr[3]);

// Propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);

const myName = "Luiz Fillipe";

console.log(myName.length);

// Métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Algum texto";

console.log(text.toUpperCase());

console.log(text.indexOf("u"));

// Objetos
const person = {
    name: "Luiz Fillipe",
    age: 23,
    job: "Estudante",
}

console.log(person);

console.log(person.name);

console.log(person.name.length);

// Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000,
}

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// Mais sobre objetos
const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object);

const obj2 = {
    c: [],
}

Object.assign(obj2, obj);

console.log(obj);

// Conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// Mutação
const a = {
    a: "Luiz Fillipe",
}

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 24;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// loop em array
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando usuário: ${users[i]}`);
}

// Push e Pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array);
console.log(array.length);

array.pop();
const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);
console.log(array.length);

array.push("Dá", "Para", "Inserir", "Vários");

console.log(array);

// Shift e Unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("z", "x", "y");

letters.unshift("p");

console.log(letters);

// Indexof e lastindexof

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.lastIndexOf("Maçã"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

// 2 em diante
const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// Foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((n) => {
    console.log(`O número atual é: ${n}`);
});

const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "JavaScript" },
    { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// Includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("Kia"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
}

// Reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// Trim
const trimTest = "  testando \n  ";

console.log(trimTest);
console.log(trimTest.trim());
console.log(trimTest.length);
console.log(trimTest.trim().length);

// Padstart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

// Split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// Join
const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// Repeat
const palavra = "Testando";

console.log(palavra.repeat(5));

// 23 - Rest operator
const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
};

console.log(somaInfinita(1, 5, 10));

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// For...of
const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }

    return total;
};

console.log(somaInfinita2(1, 5, 10));

console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// Destructuring objetos
const userDetails = {
    firstName: "Matheus",
    lastName: "Battisti",
    job: "Programador",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// Renomeando variáveis
const { firstName: primeiroNome } = userDetails;

console.log(firstName);

// Destructuring me arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// Json
const myJson =
    '{"name": "Matheus","age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// Json para objeto e objeto para json
const myObject = JSON.parse(myJson);

console.log(myObject);

// json invalido
const badJson =
    '{"name": Matheus,"age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// const myBadObject = JSON.parse(badJson);
myObject.isOpenToWork = true;

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);