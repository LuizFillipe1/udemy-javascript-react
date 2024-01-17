// Métodos
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au au");
    }
}

console.log(animal.nome);

animal.latir();

// Aprofundando conhecimentos em métodos
const pessoa = {
    nome: "Luiz Fillipe",

    getNome: function () {
        return this.nome;
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    }
}

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Matheus");
console.log(pessoa.getNome());

// Prototype
const text = "Teste";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

// Mais sobre prototype
const myObject = {
    a: "b",
}

const mySecondObject = Object.create(myObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);