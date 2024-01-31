// Instalação
console.log(axios);

// Primeiro request

const getData = async () => {

    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users",
            // definindo headers
            {
                headers: {
                    "Content-Type": "application/json",
                    custom: "header"
                }
            })
        console.log(response);

        return response.data;
    } catch (error) {
        console.log(error)
    }

}

console.log(getData());

// imprimindo dados na tela
const container = document.querySelector("#user-container")

const printData = async () => {
    const data = await getData();

    data.forEach(user => {
        const div = document.createElement("div")
        const p = document.createElement("p")

        const nameElement = document.createElement("h2")

        nameElement.textContent = user.name;
        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;

        div.appendChild(nameElement);
        p.appendChild(emailElement)

        container.appendChild(div);
        container.appendChild(p)





    });
}

printData();

// post
const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    postsFetch.post("/posts", {
        body: { title: titleInput.value, body: bodyInput.value, userId: 1 }
    })
})