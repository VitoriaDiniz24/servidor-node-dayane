const botao = document.getElementById("botaoAmor");
const surpresa = document.getElementById("surpresa");

// Botão da surpresa

botao.addEventListener("click", () => {

    surpresa.classList.toggle("mostrar");

    if (surpresa.classList.contains("mostrar")) {

        botao.textContent = "Eu te amo!";

    } else {

        botao.textContent = "Clique aqui ❤️";

    }

});