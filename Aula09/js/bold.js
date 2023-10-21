let distancia
for (distancia = 1; distancia <=10; distancia++){
    console.log('Objeto avançou: ' + distancia)
}

let km = 0
do{
    km +=1
    console.log('Veículo deslocou-se por' + km +'km' )
}while(km < 5)

let item = 0
let soma = 0
while(item < 3){
    item++
    soma += item
    console.log('A soma do valor atual com anterioré '+ soma )
}
let i = 0
for( i = 1; i< 10;i++){
    if(i % 3 == 0){
        break
    }
}
console.log(i + ' é divisivel por 3 com resto 0')

let caracter = 's'
let frase = 'Curso básico de javascript'
let contador = 0
for(let l = 0; l< frase.length; l++){
    if(frase.charAt(l) != caracter){
        continue
    }
    contador++
}
console.log('A frase contém ' +  contador + ' letras: ' + caracter )