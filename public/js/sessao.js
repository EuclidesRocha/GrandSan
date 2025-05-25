// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
   

    if (email != null && nome != null) {

        return true
        
    } else {
         window.location = "../TelaLogin.html";
        return false
       
    }
}



// carregamento (loading)



