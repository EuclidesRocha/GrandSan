function mudarTelaUser(){
    var username = sessionStorage.NOME_USUARIO;
  var  userCidadePrefe =  sessionStorage.CIDADE_USUARIO;
   if (userCidadePrefe == 1){
    	var userimagemFundo = `url('../arquivos/imagens/imagemLossantos.png')`;
        div_home.style.backgroundImage = userimagemFundo;
        p_cidade.innerHTML += ` LOS SANTOS`
        

   }else if(userCidadePrefe == 2){
    	var userimagemFundo = `url('../arquivos/imagens/imagemSanfierro.png')`;
        div_home.style.backgroundImage = userimagemFundo;
        p_cidade.innerHTML += ` SAN FIERRO`
   }else if(userCidadePrefe == 3){
    	var userimagemFundo = `url('../arquivos/imagens/imagemLasVenturas.png')`;
        div_home.style.backgroundImage = userimagemFundo;
        p_cidade.innerHTML += ` LAS VENTURAS`
   }
   p_ola.innerHTML += ` ${username}`; 
   }



   function mudarCor(){
    var userGangue = sessionStorage.GANGUE_USUARIO;
    var color = "color"
    if(userGangue == 1){
        color = "rgba(10, 60, 10, 0.8)"
        layoutUserCor.style.backgroundColor = color;
        imagemUser.style.backgroundImage = `url('../arquivos/imagens/membroGROve.png')`
        id_butaoSair.style.backgroundColor = color;
        p_membro.innerHTML += ` GROVE STREET`

    }else if(userGangue == 2){
        color = "rgba(61, 7, 48, 0.8)"
        layoutUserCor.style.backgroundColor = color;
        imagemUser.style.backgroundImage = `url('../arquivos/imagens/membroBallas.png')`
        id_butaoSair.style.backgroundColor = color;
        p_membro.innerHTML += ` BALLAS`
    }else if(userGangue == 3){
        color = "rgba(179, 184, 27, 0.8)"
        layoutUserCor.style.backgroundColor = color;
        imagemUser.style.backgroundImage = `url('../arquivos/imagens/membroVagos.png')`
        id_butaoSair.style.backgroundColor = color;
        p_membro.innerHTML += ` VAGOS`


    }else if(userGangue == 4){
        color = "rgba(48, 186, 217, 0.8)"
        layoutUserCor.style.backgroundColor = color;
        imagemUser.style.backgroundImage = `url('../arquivos/imagens/membroAzteca.png')`
        id_butaoSair.style.backgroundColor = color;
        p_membro.innerHTML += ` LOS AZTECAS`


    }
}


    function corMudar(){
    var userGangue = sessionStorage.GANGUE_USUARIO;
    var color = "color"
    if(userGangue == 1){
        color = "rgba(10, 60, 10, 0.8)"
        
        div_corDasPaginas.style.backgroundColor = color;
        

    }else if(userGangue == 2){
        color = "rgba(61, 7, 48, 0.8)"
        
        div_corDasPaginas.style.backgroundColor = color;
      
    }else if(userGangue == 3){
        color = "rgba(179, 184, 27, 0.8)"
        
        div_corDasPaginas.style.backgroundColor = color;
        
    


    }else if(userGangue == 4){
        color = "rgba(48, 186, 217, 0.8)"
       
        div_corDasPaginas.style.backgroundColor = color;
      


    }}



    {
        function deslogar(){
            sessionStorage.EMAIL_USUARIO = undefined
            sessionStorage.CIDADE_USUARIO = undefined
            sessionStorage.GANGUE_USUARIO = undefined
            sessionStorage.ID_USUARIO = undefined
            sessionStorage.NOME_USUARIO = undefined

            window.location = "http://localhost:3333/"
            
        }
    }
   
// COLOCAR FOTO DO MEMBRO DA GANGUE