// let sinal ="amarelo"
// if (sinal === "vermelho"){
//     alert('Aguarde o Sinal')

// }else if( sinal ==="amarelo"){
//     alert('Fique atento ao sinal!')
// }

// else{
//     alert('Ok,pode passar!')
// }
let sinal = 'verde'
switch (sinal) {
  case "vermelho":
    console.log("Aguarde o sinal");
    break;
  case "amarelo":
    console.log("Pare");
    break;
  case "verde":
    console.log("Pode passar");
    break;
  case 'Piscando':
    console.log("Atenção ao cruzar")
    break;
  default:
    console.log("casos nao prestvisto")
}
let ClienteTipo = 'Gold'
let desconto = ''

ClienteTipo === 'Gold' ? desconto = "15%" : desconto = "20%"
console.log('O cliente é ' + ClienteTipo +  ' o desconto é de ' + desconto)