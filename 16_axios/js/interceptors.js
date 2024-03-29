// requisição
axios.interceptors.request.use(
    function (config) {
        console.log("antes da requisição...");
        return config;
    },
    function (error) {
        return Promise.reject(error);

    }
)

// resposta
axios.interceptors.response.use(
    function (response) {
        console.log("antes da resposta...");
        return response;
    },
    function (error) {
        return Promise.reject(error);

    }
)