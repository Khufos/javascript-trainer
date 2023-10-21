function cadastrarCliente(){
    let firstName = document.getElementById('nome').value
    let lastName = document.getElementById('sobrenome').value
    let idade = document.getElementById('idade').value
    idade = parseInt(idade)
    let municipio = document.getElementById('cidade').value
    let uf =document.getElementById('uf').value
    const cliente = new Cliente(firstName,lastName,idade,municipio,uf)
    mostrarCliente(cliente)
}

function Cliente(nome,sobrenome,idade,cidade,uf){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade,
    this.cidade = cidade
    this.uf = uf
}

function mostrarCliente(cliente){
    let destino = document.getElementById('novoCliente')
    let nomeCli = cliente.nome
    let sobrenomeCli = cliente.sobrenome
    let idadeCli = cliente.idade
    let cidadeCli = cliente.cidade
    let ufCli = cliente.uf  
    destino.innerHTML = '<p><strong>Cliente: </strong>' +nomeCli+ ' ' + sobrenomeCli + '</p><p><strong>Idade: </strong>' +
    idadeCli + '</p><p><strong>Localidade: </strong>' + cidadeCli + ' - ' + ufCli + '</p>'
} 