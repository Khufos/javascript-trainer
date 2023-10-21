
function adicionar() {
    let valor = document.getElementById('novo').value
    if (valor === '') {
        alert("É nessário informar o nome")
    } else {
        if (localStorage.getItem("clientes") === null) {
            let listaClientes = [valor]
            localStorage.setItem("clientes", JSON.stringify(listaClientes))
            document.getElementById('novo').value = ""
            let resposta = JSON.parse(localStorage.getItem("clientes"))
            document.getElementById("retorno").innerHTML = resposta
        } else {
            let listaClientes = JSON.parse(localStorage.getItem("clientes"))
            listaClientes.push(valor)
            localStorage.setItem("clientes",JSON.stringify(listaClientes))
            document.getElementById('novo').value= ""
            let resposta = JSON.parse(localStorage.getItem("clientes"))
            document.getElementById("retorno").innerHTML = resposta
        }
    }
}