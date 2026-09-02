`use strict`;

const botaoCompra = document.querySelector(`.botao button`);
botaoCompra.addEventListener(`click`, () =>{

    botaoCompra.textContent = `Produto Adicionado ao Carrinho!`;
});