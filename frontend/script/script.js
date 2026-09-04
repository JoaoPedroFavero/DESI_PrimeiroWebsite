`use strict`;

// BOTÕES DOS PRODUTOS 

const btnProduto1 = document.getElementById(`btn-produto-1`);
btnProduto1.addEventListener(`click`, function () {
    window.location.href = `../produto1/produto.html`
});

const btnProduto2 = document.getElementById(`btn-produto-2`);
btnProduto2.addEventListener(`click`, function () {
    window.location.href = `../produto2/produto.html`
});

const btnProduto3 = document.getElementById(`btn-produto-3`);
btnProduto3.addEventListener(`click`, function () {
    window.location.href = `../produto3/produto.html`
});

const btnProduto4 = document.getElementById(`btn-produto-4`);
btnProduto4.addEventListener(`click`, function () {
    window.location.href = `../produto4/produto.html`
});

const linkIcone = document.getElementById(`link-icone`);
const icone = document.getElementById(`icone`);
const btnTema = document.getElementById(`theme-button`);
const body = document.getElementsByTagName(`body`);
let cont = 1;

btnTema.addEventListener(`click`, () => {
    cont++;
    if (cont % 2 == 0) {
        icone.textContent = `clear_day`;
        
    } else{   
        icone.textContent = `brightness_2`;
    }

    document.body.classList.toggle(`dark-theme`);

    if(document.body.classList.contains(`dark-theme`)){
        localStorage.setItem(`tema`, `escuro`);
    } else{
        localStorage.setItem(`tema`, `claro`);
    }
});