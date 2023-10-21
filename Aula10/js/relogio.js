let hoje  = new Date()
let reveillon = new Date(2023, 11, 31, 23, 59, 59, 999)

let milisegundos = 24 * 60 * 60 * 1000

let miliRestantes = (reveillon.getTime() - hoje.getTime()) / 
milisegundos

diasRestantes = Math.round(miliRestantes)
let paraOAnoNovo = "Faltam: " + diasRestantes + " dias para o Ano Novo"

document.getElementById('tempo').innerHTML = paraOAnoNovo

function relogio_hora()
{
    let poAtual = new Date()
    let horaAtual = poAtual.getHours()
    let minutos = poAtual.getMinutes()
    let second = poAtual.getSeconds()
    let temDisplay = "" + ((horaAtual> 12) ? horaAtual - 12 : horaAtual ) 
    temDisplay += ((minutos < 10)? ":0" : ":") + minutos
    temDisplay += ((second < 10)? ":0": ":")  + second
    temDisplay += (horaAtual >= 12) ? " PM": "AM"
    //console.log(temDisplay)
    document.getElementById('clock').innerHTML = temDisplay

    setTimeout(function(){
        relogio_hora()
    },1000)

}