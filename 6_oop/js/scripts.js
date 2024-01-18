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

// Classes básicas
const cachorro = {
    race: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro);
pastorAlemao.race = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// Função como classe - função construtura
function criarCachorro(nome, raca) {
    const cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira-lata");

console.log(bob);

const jack = criarCachorro("Jack", "york");

console.log(jack);

// Funções como classe
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("lula", "Husky");

console.log(husky);

// Métodos na função construtura
Cachorro.prototype.uivar = function () {
    console.log("Auuuuuuuu!");
}

console.log(Cachorro);
console.log(Cachorro.prototype);

husky.uivar();

// Classes es6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// Mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "vermelha");

console.log(scania);

scania.descreverCaminhao();

const c2 = new Caminhao(4, "preto");

console.log(c2);

console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "azul");

console.log(c3.motor);

console.log(Caminhao);

console.log(Object.getPrototypeOf(c3));

// override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const luiz = new Humano("Luiz Fillipe", 23);

console.log(luiz);

Humano.prototype.idade = "Não definida";

console.log(luiz.idade);

console.log(Humano.prototype.idade);

// Symbols em classes
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post("Algum post", "é um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programacao, javascript, js";

console.log(myPost);

// Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);

// Instanceof
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Post("a", "b") instanceof Cachorro);
