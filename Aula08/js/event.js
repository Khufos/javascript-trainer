function AbreAlerta() {
  alert("Alerta");
}
let bgMuda = document.querySelector('.mudaBG')
function random(num){
    return Math.floor(Math.random() * (num+1))
}
bgMuda.onclick = function(){
    let randomColor = 'rgb('+ random(255) + ',' + random(255) + ',' + random(255) + ')' 
    document.body.style.backgroundColor = randomColor
}

window.onkeydown  = function(){
    let randomColor = 'rgb('+ random(255) + ',' + random(255) + ',' + random(255) + ')' 
    document.body.style.backgroundColor = randomColor
}

let botao = document.getElementById('mostrarvideo')
let secao = document.querySelector('section')
function mostraVideo() {
    if(secao.getAttribute('class') === 'hidden') {
    secao.setAttribute('class', 'showing')
    }
   }
botao.addEventListener('click',mostraVideo)
secao.addEventListener('click', () =>
secao.setAttribute('class', 'hidden'))
let video = document.querySelector('video')
video.addEventListener('click', () => video.play())