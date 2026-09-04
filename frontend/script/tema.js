function tema(){
    const temaSalvo = localStorage.getItem(`tema`);

    if(temaSalvo == `escuro`){
        document.body.classList.add(`dark-theme`);
    }
}

tema();