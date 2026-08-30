const botao = document.getElementById("botaoAmor");

// Botão da surpresa

botao.addEventListener("click", () => {

    surpresa.classList.toggle("mostrar");

    if (surpresa.classList.contains("mostrar")) {

        botao.textContent = "Eu te amo! ❤️";

    } else {

        botao.textContent = "Clique aqui ❤️";

    }

});