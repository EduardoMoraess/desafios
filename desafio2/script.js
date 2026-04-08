function formularioLogin(){
    const user = document.getElementById('user');
    const password = document.getElementById('senha')
    const btnValidar = document.getElementById('validar')

    btnValidar.addEventListener('click', ()=>{
        let usuario = user.value;
        let senha = password.value;

        if(isNaN(senha)){
            alert('verificar senha!')
            return
        }

        if(usuario == "user" && senha == 123){
            alert(`Seja Bem-Vindo(a) ${usuario}`);
        }
        else{
            alert('Verificar credenciais')
        }
    })
}