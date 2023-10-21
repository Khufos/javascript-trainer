function resultado() {
    let name = document.getElementById('nome').value
    let surname = document.getElementById('sobrenome').value
    let valor = document.getElementById('nota').value
    let performace = (valor >= 7) ? '<span style="color:green;">Aprovado</span>' : '<span style="color:red;">Reprovado</span>'
    let result = document.getElementById('resposta')
    result.innerHTML = 'O aluno ' + name + ' ' + surname + ' teve nota:' + valor + ' e foi <strong>' + performace + '<strong>.'

}

