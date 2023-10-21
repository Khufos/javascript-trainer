//let container = document.getElementById('retorno');
//let clientes = ['joao','Maria','Elizar']
//container.innerHTML = clientes

function adicionar() {
    let valor = document.getElementById('novo').value
    if (valor === '') {
        alert("É nessário informar o nome")
    } else {
        if (localStorage.getItem("clientes") === null) {
            let listaClientes = [valor]
            localStorage.getItem("clientes", JSON.stringify(listaClientes))
            document.getElementById('novo').value = ""
            let resposta = JSON.parse(localStorage.getItem("clien tes"))
            document.getElementById('retorno').innerHTML = resposta
        } else {
            alert('existe')
        }
    }
}