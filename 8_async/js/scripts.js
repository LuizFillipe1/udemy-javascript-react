// setTimeout
console.log("Ainda nao executou");

setTimeout(function () {
    console.log("Requisição assíncrona");
}, 2000)

console.log("Ainda nao executou 2");

// setInterval
console.log("Ainda nao começou");

// setInterval(function () {
//     console.log("Intervalo assíncrono");
// }, 3000);


console.log("Ainda nao começou 2");

// Promises
const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa.then(value => {
    console.log(`a soma é: ${value}`)
    return value;
})
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é ${value}`));


console.log("Outro código");

// Falha na promise
Promise.resolve(4 * "asd")
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("Valores invalidos");
        }
    })
    .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// Rejeição
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve("o numero é maior que 10")
        } else {
            reject(new Error("Numero muito baixo"))
        }
    })
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`o resultado é ${v}`)).catch((err) => console.log(`Um erro ocorrou: ${err}`));
b.then((v) => console.log(`o resultado é ${v}`)).catch((err) => console.log(`Um erro ocorrou: ${err}`));

// Resolvendo varias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10);
    }, 3000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject("Erro!");
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// Async functions
async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`);
});

// Await
function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolveu Promise");
        }, 2000);
    });
}

async function chamadaAsync() {
    console.log("Chamando Promise, e esperando resultado...");
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// generators
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);