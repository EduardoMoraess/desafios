const validarDados = document.getElementById('validar')
const user = document.getElementById('name')
const password = document.getElementById('password')


validarDados.addEventListener('click', ()=>{
    let nome = user.value
    let senha = password.value

    if(isNaN(senha)){
        alert('apenas numeros')
        return
    }
})