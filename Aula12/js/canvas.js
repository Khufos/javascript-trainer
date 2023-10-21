let palco = document.getElementById('canvas');

let retangulo = palco.getContext('2d');
retangulo.fillStyle= '#99FF55';
retangulo.fillRect(10,10,130,50)


let circulo = palco.getContext('2d')
//circulo.fillStyle = 'red'
circulo.beginPath()
circulo.arc(255,35,25,0,Math.PI * 2)
circulo.lineWidth = 7
circulo.strokeStyle = 'purple'
circulo.stroke()

let retangulo2 = palco.getContext('2d')
let gradiente = retangulo2.createLinearGradient(10,70,140,70)
gradiente.addColorStop(0,'red')
gradiente.addColorStop(0.5,'white')
gradiente.addColorStop(1,'blue')
retangulo2.fillStyle = gradiente
retangulo2.fillRect(10,70,130,50)

let retangulo3 = palco.getContext('2d')
let radial = retangulo3.createRadialGradient(255,95,40,255,95,15)
radial.addColorStop(0, 'black')
radial.addColorStop(0.5,'white')
radial.addColorStop(1,'red')
retangulo3.fillStyle = radial
retangulo3.fillRect(160,70,130,50)


let hello = palco.getContext('2d')
hello.font = '22px Italic'
hello.fillStyle = 'red'
hello.textAlign = 'center'
hello.fillText('Hello World', palco.width /2,145)