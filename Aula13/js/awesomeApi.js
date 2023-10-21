function viewUsd(){
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL'
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const moeda = data.USDBRL
            let estaData = new Date(moeda.create_date)
            document.getElementById('title').innerHTML = moeda.name
            document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
            document.getElementById('maxvalue').innerHTML = parseFloat(moeda.high).toLocaleString('pt-br',{
                style: 'currency',
                currency: 'BRL'
            })
            document.getElementById('minvalue').innerHTML = parseFloat(moeda.low).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }) 
        })
    }
function viewEur(){
    const url = 'https://economia.awesomeapi.com.br/last/EUR-BRL'
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const moeda = data.EURBRL
            let estaData = new Date(moeda.create_date)
            document.getElementById('title').innerHTML = moeda.name
            document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
            document.getElementById('maxvalue').innerHTML = parseFloat(moeda.high).toLocaleString('pt-br',{
                style: 'currency',
                currency: 'BRL'
            })
            document.getElementById('minvalue').innerHTML = parseFloat(moeda.low).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }) 
        })
    }
function viewGbp(){
    const url = 'https://economia.awesomeapi.com.br/last/GBP-BRL'
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const moeda = data.GBPBRL
            let estaData = new Date(moeda.create_date)
            document.getElementById('title').innerHTML = moeda.name
            document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
            document.getElementById('maxvalue').innerHTML = parseFloat(moeda.high).toLocaleString('pt-br',{
                style: 'currency',
                currency: 'BRL'
            })
            document.getElementById('minvalue').innerHTML = parseFloat(moeda.low).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            }) 
        })
    }
