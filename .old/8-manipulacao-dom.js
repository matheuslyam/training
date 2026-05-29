// 8. Manipulação do DOM

/*
- O que é o DOM (Document Object Model)
- Selecionar elementos (`querySelector`, `getElementById`, etc.)
- Manipular conteudo e atributos (`textContent`, `innerHTML`, `setAttribute`, etc.)
- Trabalhar com eventos (`addEventListener`, `removeEventListener`, etc.)
- Criar, adicionar e remover elementos (`createElement`, `appendChild`, `removeChild`, etc.)
/*

/* DOM - Document Object Model

- DOM é um conjunto de objetos que representa a estrutura de uma página web.*/


// --- Selecionar elementos (`querySelector`, `getElementById`, etc.) ---

// `querySelector` - Seleciona o primeiro elemento que corresponde ao seletor
const titulo = document.querySelector("#titulo");
const botao = document.querySelector("button");
const paragrafo = document.querySelector("#paragrafo");

console.log(titulo);
console.log(botao);
console.log(paragrafo);

// `getElementById` - Seleciona o elemento pelo seu id
const botao1 = document.getElementById("botao-1");
const lista2 = document.getElementById("lista-2");

console.log(botao1);
console.log(lista2);

// `getElementsByClassName` - Seleciona os elementos pelo nome da classe
const botao2 = document.getElementsByClassName("botao-2");
const lista3 = document.getElementsByClassName("lista-3");
const container1 = document.getElementsByClassName("container1");

console.log(botao2);
console.log(lista3);
console.log(container1);

// `getElementsByTagName` - Seleciona os elementos pelo nome da tag
const lista = document.getElementsByTagName("li");
const lista4 = document.getElementsByTagName("lista-4");
const texto1 = document.getElementsByTagName("texto-1");

console.log(lista);
console.log(lista4);
console.log(texto1);

// `querySelectorAll` - Seleciona todos os elementos que correspondem ao seletor
const texto = document.querySelectorAll("texto");
const texto2 = document.querySelectorAll("texto-2");
const texto3 = document.querySelectorAll("texto-3");

console.log(texto);
console.log(texto2);
console.log(texto3);


// --- Manipular conteudo e atributos (`textContent`, `innerHTML`, `setAttribute`, etc.) ---

// `textContent` - Modifica o conteúdo de texto de um elemento
texto.textContent = "Texto alterado por JS"
texto2.textContent = "Texto 2 alterado por JS"
texto3.textContent = "Texto 3 alterado por JS"

console.log(texto);
console.log(texto2);
console.log(texto3);

// `innerHTML` - Modifica o conteúdo HTML de um elemento
texto.innerHTML = "Texto innerHTML alterado por JS"

console.log(texto.innerHTML);

texto2.innerHTML = "Texto 2 innerHTML alterado por JS"

console.log(texto2.innerHTML);

// `setAttribute` - Modifica um atributo de um elemento
const botao3 = document.createElement("button");
botao3.textContent = "Botão 3";
botao3.setAttribute("id", "botao-3");
botao3.setAttribute("class", "botao-2");
botao3.setAttribute("type", "button");
botao3.setAttribute("disabled", "true");

console.log(botao3.getAttribute("id"));

// `getAttribute` - Retorna o valor de um atributo de um elemento
const botao4 = document.createElement("button");
botao4.textContent = "Botão 4";
botao4.setAttribute("id", "botao-4");
botao4.setAttribute("class", "botao-2");
botao4.setAttribute("type", "button");
botao4.setAttribute("disabled", "true");

console.log(botao4.getAttribute("id"));


// --- Trabalhar com eventos (`addEventListener`, `removeEventListener`, etc.) ---

// `addEventListener` - Adiciona um evento a um elemento
botao4.addEventListener("click", function () {
    console.log("Botão 4 clicado")
})

// `removeEventListener` - Remove um evento de um elemento
botao4.removeEventListener("click", function () {
    console.log("Botão 4 clicado")
});


// --- Criar, adicionar e remover elementos (`createElement`, `appendChild`, `removeChild`, etc.) ---

// `createElement` - Cria um novo elemento
const botao5 = document.createElement("button");
botao5.textContent = "Botão 5";
botao5.id = "botao-5";
botao5.className = "botao";
botao5.setAttribute("type", "button");
botao5.setAttribute("disabled", "true");

console.log(botao5);

// `appendChild` - Adiciona um elemento ao final de um elemento pai
document.addEventListener('DOMContentLoaded', function () {

    const pai = document.querySelector(".container");
    const filho = document.createElement("TESTE");
    filho.textContent = "Novo Filho";
    pai.appendChild(filho);

    console.log(pai);
})