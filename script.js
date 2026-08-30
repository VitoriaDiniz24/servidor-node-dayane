```javascript
const botao = document.getElementById("botaoAmor");
const surpresa = document.getElementById("surpresa");
const containerCoracoes = document.querySelector(".hearts");


// Botão da surpresa

botao.addEventListener("click", () => {

    surpresa.classList.toggle("mostrar");

    if (surpresa.classList.contains("mostrar")) {

        botao.textContent = "Eu te amo! ❤️";

    } else {

        botao.textContent = "Clique aqui ❤️";

    }

});


// Criar corações

function criarCoracao() {

    const coracao = document.createElement("div");

    coracao.classList.add("heart-fall");

    coracao.textContent = "❤️";

    coracao.style.left = Math.random() * 100 + "vw";

    coracao.style.fontSize =
        Math.random() * 20 + 15 + "px";

    coracao.style.animationDuration =
        Math.random() * 4 + 4 + "s";

    containerCoracoes.appendChild(coracao);


    setTimeout(() => {

        coracao.remove();

    }, 8000);
}


// Criar novos corações a cada 500ms

setInterval(criarCoracao, 500);
```
