// Adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
});

// Removendo eventos
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
})

// Argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

// Propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
});

// Removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Nao direcionou!");
})

// Eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla: ${e.key}`);
})

document.addEventListener("keydown", (e) => {
    console.log(`pressionou a tecla: ${e.key}`);
})

// eventos do mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botao");
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("soltou o botao");
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("click duplo");
})

// Movimentos do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo X:${e.x}`);
    // console.log(`No eixo Y:${e.y}`);
})

// Evento do scroll
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 200) {
        console.log("Passamos de 200");
    }
})

// eventos de focus/blur
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
})

input.addEventListener("blur", (e) => {
    console.log("saiu do input");
})

// Evento de carregamento
window.addEventListener("load", () => {
    console.log("A pagina carrregou");
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
})

// debounce
const debounce = (f, delay) => {
    let timeout
    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log("executando a cada 400ms");
}, 400)
)