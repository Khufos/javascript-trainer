botao = document.querySelector('#submitbtn')

botao.addEventListener("click", function(event){
    event.preventDefault()
    const name = document.querySelector('#name').value
    const sobrnome = document.querySelector('#Sobrenome').value
    const email = document.querySelector('#myemail').value
    const bird = document.querySelector('#birthdate').value
    console.table([name,sobrnome,email,bird])
})