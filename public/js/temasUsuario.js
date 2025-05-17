function mudarTelaUser(){
    var username = sessionStorage.NOME_USUARIO;
  var  userCidadePrefe =  sessionStorage.CIDADE_USUARIO;
   if (userCidadePrefe == 1){
    	userimagem = `url('../arquivos/imagens/imagemLossantos.png')`;
        div_home.style.backgroundImage = userimagem;
        p_cidade.innerHTML += ` LOS SANTOS`
        

   }else if(userCidadePrefe == 2){
    	userimagem = `url('../arquivos/imagens/imagemSanfierro.png')`;
        div_home.style.backgroundImage = userimagem;
        p_cidade.innerHTML += ` SAN FIERRO`
   }else if(userCidadePrefe == 3){
    	userimagem = `url('../arquivos/imagens/imagemLasVenturas.png')`;
        div_home.style.backgroundImage = userimagem;
        p_cidade.innerHTML += `LAS VENTURAS`
   }
   p_ola.innerHTML += ` ${username}`; 
   }



   function mudarCor(){
    var userGangue = sessionStorage.GANGUE_USUARIO;
    var color = "color"
    if(userGangue == 1){
        color = "rgba(10, 60, 10, 0.8)"
        layoutUserCor.style.backgroundColor = color;
        id_butaoSair.style.backgroundColor = color;
        p_membro.innerHTML += `GROVE STREET`

    }else if(userGangue == 2){
        color = "rgba(61, 7, 48, 0.8)"
        layoutUserCor.style.backgroundColor = color;
        id_butaoSair.style.backgroundColor = color;
        p_membro.innerHTML += `BALLAS`
    }else if(userGangue == 3){
        color = "rgba(179, 184, 27, 0.8)"
        layoutUserCor.style.backgroundColor = color;
        id_butaoSair.style.backgroundColor = color;
        p_membro.innerHTML += `VAGOS`


    }else if(userGangue == 4){
        color = "rgba(48, 186, 217, 0.8)"
        layoutUserCor.style.backgroundColor = color;
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
   
// COLOCAR FOTO DO MEMBRO DA GANGUE