function criarParagrafo(){
    paragrafo = document.createElement('h1')
    paragrafo.textContent = 'Eu criei esse elemento';
    document.body.appendChild(paragrafo)
    
}

const buttons = document.querySelectorAll('button')
for(var i=0 ; i< buttons.length; i++){
    buttons[i].addEventListener('click',criarParagrafo)
}