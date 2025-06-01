color1 = "rgba(10, 60, 10, 1)"
color2 = "rgb(255, 255, 255)"

function feita1() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_1 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 1
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_1 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_1 == 0 ){

        id_missao1.style.backgroundColor = color1

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 1
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_1 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
        
    } 
}

function feita2() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_2 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 2
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_2 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_2 == 0 ){
r = color1

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 2
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_2 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita3() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_3 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 3
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_3 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_3 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 3
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_3 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita4() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_4 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 4
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_4 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_4 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 4
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_4 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita5() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_5 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 5
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_5 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_5 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 5
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_5 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita6() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_6 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 6
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_6 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_6 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 6
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_6 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita7() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_7 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 7
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_7 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_7 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 7
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_7 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita8() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_8 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 8
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_8 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_8 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 8
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_8 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita9() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_9 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 9
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_9 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_9 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 9
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_9 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita10() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_10 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 10
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_10 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_10 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 10
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_10 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita11() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_11 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 11
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_11 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_11 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 11
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_11 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita12() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_12 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 12
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_12 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_12 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 12
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_12 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita13() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_13 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 13
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_13 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_13 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 13
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_13 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita14() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_14 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 14
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_14 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_14 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 14
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_14 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita15() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_15 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 15
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_15 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_15 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 15
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_15 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita16() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_16 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 16
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_16 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_16 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 16
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_16 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita17() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_17 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 17
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_17 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_17 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 17
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_17 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita18() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_18 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 18
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_18 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_18 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 18
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_18 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita19() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_19 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 19
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_19 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_19 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 19
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_19 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita20() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_20 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 20
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_20 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_20 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 20
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_20 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita21() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_21 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 21
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_21 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_21 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 21
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_21 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita22() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_22 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 22
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_22 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_22 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 22
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_22 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita23() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_23 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 23
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_23 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_23 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 23
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_23 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita24() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_24 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 24
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_24 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_24 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 24
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_24 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita25() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_25 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 25
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_25 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_25 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 25
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_25 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita26() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_26 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 26
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_26 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_26 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 26
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_26 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita27() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_27 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 27
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_27 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_27 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 27
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_27 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita28() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_28 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 28
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_28 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_28 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 28
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_28 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita29() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_29 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 29
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_29 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_29 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 29
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_29 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita30() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_30 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 30
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_30 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_30 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 30
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_30 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita31() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_31 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 31
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_31 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_31 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 31
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_31 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita32() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_32 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 32
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_32 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_32 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 32
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_32 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita33() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_33 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 33
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_33 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_33 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 33
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_33 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita34() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_34 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 34
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_34 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_34 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 34
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_34 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita35() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_35 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 35
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_35 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_35 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 35
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_35 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita36() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_36 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 36
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_36 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_36 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 36
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_36 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita37() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_37 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 37
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_37 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_37 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 37
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_37 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita38() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_38 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 38
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_38 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_38 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 38
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_38 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita39() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_39 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 39
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_39 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_39 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 39
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_39 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita40() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_40 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 40
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_40 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_40 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 40
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_40 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita41() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_41 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 41
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_41 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_41 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 41
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_41 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita42() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_42 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 42
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_42 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_42 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 42
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_42 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita43() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_43 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 43
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_43 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_43 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 43
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_43 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita44() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_44 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 44
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_44 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_44 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 44
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_44 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita45() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_45 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 45
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_45 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_45 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 45
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_45 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita46() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_46 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 46
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_46 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_46 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 46
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_46 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita47() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_47 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 47
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_47 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_47 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 47
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_47 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita48() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_48 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 48
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_48 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_48 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 48
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_48 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita49() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_49 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 49
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_49 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_49 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 49
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_49 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita50() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_50 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 50
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_50 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_50 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 50
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_50 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita51() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_51 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 51
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_51 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_51 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 51
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_51 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita52() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_52 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 52
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_52 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_52 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 52
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_52 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita53() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_53 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 53
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_53 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_53 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 53
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_53 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita54() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_54 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 54
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_54 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_54 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 54
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_54 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita55() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_55 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 55
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_55 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_55 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 55
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_55 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita56() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_56 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 56
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_56 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_56 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 56
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_56 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita57() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_57 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 57
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_57 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_57 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 57
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_57 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita58() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_58 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 58
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_58 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_58 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 58
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_58 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita59() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_59 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 59
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_59 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_59 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 59
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_59 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita60() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_60 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 60
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_60 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_60 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 60
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_60 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita61() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_61 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 61
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_61 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_61 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 61
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_61 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita62() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_62 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 62
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_62 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_62 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 62
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_62 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita63() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_63 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 63
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_63 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_63 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 63
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_63 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita64() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_64 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 64
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_64 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_64 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 64
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_64 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita65() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_65 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 65
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_65 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_65 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 65
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_65 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita66() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_66 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 66
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_66 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_66 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 66
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_66 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita67() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_67 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 67
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_67 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_67 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 67
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_67 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita68() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_68 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 68
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_68 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_68 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 68
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_68 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita69() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_69 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 69
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_69 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_69 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 69
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_69 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita70() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_70 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 70
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_70 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_70 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 70
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_70 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita71() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_71 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 71
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_71 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_71 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 71
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_71 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita72() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_72 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 72
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_72 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_72 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 72
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_72 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita73() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_73 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 73
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_73 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_73 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 73
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_73 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita74() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_74 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 74
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_74 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_74 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 74
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_74 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita75() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_75 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 75
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_75 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_75 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 75
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_75 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita76() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_76 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 76
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_76 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_76 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 76
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_76 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita77() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_77 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 77
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_77 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_77 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 77
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_77 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita78() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_78 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 78
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_78 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_78 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 78
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_78 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita79() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_79 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 79
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_79 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_79 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 79
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_79 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita80() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_80 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 80
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_80 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_80 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 80
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_80 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita81() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_81 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 81
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_81 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_81 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 81
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_81 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita82() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_82 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 82
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_82 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_82 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 82
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_82 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita83() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_83 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 83
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_83 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_83 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 83
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_83 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita84() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_84 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 84
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_84 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_84 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 84
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_84 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita85() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_85 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 85
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_85 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_85 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 85
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_85 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita86() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_86 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 86
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_86 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_86 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 86
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_86 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita87() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_87 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 87
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_87 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_87 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 87
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_87 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita88() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_88 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 88
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_88 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_88 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 88
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_88 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita89() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_89 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 89
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_89 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_89 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 89
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_89 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita90() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_90 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 90
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_90 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_90 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 90
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_90 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita91() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_91 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 91
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_91 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_91 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 91
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_91 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita92() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_92 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 92
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_92 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_92 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 92
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_92 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita93() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_93 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 93
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_93 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_93 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 93
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_93 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita94() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_94 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 94
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_94 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_94 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 94
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_94 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita95() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_95 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 95
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_95 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_95 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 95
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_95 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita96() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_96 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 96
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_96 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_96 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 96
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_96 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita97() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_97 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 97
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_97 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_97 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 97
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_97 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita98() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_98 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 98
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_98 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_98 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 98
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_98 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita99() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_99 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 99
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_99 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_99 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 99
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_99 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}

function feita100() {
    var idUsuario = Number(sessionStorage.ID_USUARIO);
    if(sessionStorage.MISSAO_100 == 1 ){

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 0,
                missaoServer: 100
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_100 = 0
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
        
    }
    else if(sessionStorage.MISSAO_100 == 0 ){

        

        fetch("/missoes/atualizar", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUsuarioServer: idUsuario,
                concluidaServer: 1,
                missaoServer: 100
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO ()!")
            resposta.json().then(json => {console.log("RESPOSTA DO JSON:", json)});
            calma()
            sessionStorage.MISSAO_100 = 1
            color()
            
        }).catch(function (erro) {
            console.log(erro);
        })
        
    }   
}



function color(){
if(sessionStorage.MISSAO_1 == 1){
id_missao1.style.backgroundColor = color1
}else{
    id_missao1.style.backgroundColor = color2
}
if(sessionStorage.MISSAO_2 == 1 ){
    id_missao2.style.backgroundColor = color1
    
}else{
    id_missao2.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_3 == 1 ){
    id_missao3.style.backgroundColor = color1
    
}else{
    id_missao3.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_4 == 1 ){
    id_missao4.style.backgroundColor = color1
    
}else{
    id_missao4.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_5 == 1 ){
    id_missao5.style.backgroundColor = color1
    
}else{
    id_missao5.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_6 == 1 ){
    id_missao6 .style.backgroundColor = color1
    
}else{
    id_missao6.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_7 == 1 ){
    id_missao7.style.backgroundColor = color1
    
}else{
    id_missao7.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_8 == 1 ){
    id_missao8.style.backgroundColor = color1
    
}else{
    id_missao8.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_9 == 1 ){
    id_missao9.style.backgroundColor = color1
    
}else{
    id_missao9.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_10 == 1){
    id_missao10.style.backgroundColor = color1
}else{
    id_missao10.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_11 == 1 ){
    id_missao11.style.backgroundColor = color1
    
}else{
    id_missao11.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_12 == 1 ){
    id_missao12.style.backgroundColor = color1
    
}else{
    id_missao12.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_13 == 1 ){
    id_missao13.style.backgroundColor = color1
    
}else{
    id_missao13.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_14 == 1 ){
    id_missao14.style.backgroundColor = color1
    
}else{
    id_missao14.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_15 == 1 ){
    id_missao15.style.backgroundColor = color1
    
}else{
    id_missao15.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_16 == 1 ){
    id_missao16.style.backgroundColor = color1
    
}else{
    id_missao16.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_17 == 1 ){
    id_missao17.style.backgroundColor = color1
    
}else{
    id_missao17.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_18 == 1 ){
    id_missao18.style.backgroundColor = color1
    
}else{
    id_missao18.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_19 == 1 ){
    id_missao19.style.backgroundColor = color1
    
}else{
    id_missao19.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_20 == 1 ){
    id_missao20.style.backgroundColor = color1
    
}else{
    id_missao20.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_21 == 1 ){
    id_missao21.style.backgroundColor = color1
    
}else{
    id_missao21.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_22 == 1 ){
    id_missao22.style.backgroundColor = color1
    
}else{
    id_missao22.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_23 == 1 ){
    id_missao23.style.backgroundColor = color1
    
}else{
    id_missao23.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_24 == 1 ){
    id_missao24.style.backgroundColor = color1
    
}else{
    id_missao24.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_25 == 1 ){
    id_missao25.style.backgroundColor = color1
    
}else{
    id_missao25.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_26 == 1 ){
    id_missao26.style.backgroundColor = color1
    
}else{
    id_missao26.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_27 == 1 ){
    id_missao27.style.backgroundColor = color1
    
}else{
    id_missao27.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_28 == 1 ){
    id_missao28.style.backgroundColor = color1
    
}else{
    id_missao28.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_29 == 1 ){
    id_missao29.style.backgroundColor = color1
    
}else{
    id_missao29.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_30 == 1 ){
    id_missao30.style.backgroundColor = color1
    
}else{
    id_missao30.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_31 == 1 ){
    id_missao31.style.backgroundColor = color1
    
}else{
    id_missao31.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_32 == 1 ){
    id_missao32.style.backgroundColor = color1
    
}else{
    id_missao32.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_33 == 1 ){
    id_missao33.style.backgroundColor = color1
    
}else{
    id_missao33.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_34 == 1 ){
    id_missao34.style.backgroundColor = color1
    
}else{
    id_missao34.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_35 == 1 ){
    id_missao35.style.backgroundColor = color1
    
}else{
    id_missao35.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_36 == 1 ){
    id_missao36.style.backgroundColor = color1
    
}else{
    id_missao36.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_37 == 1 ){
    id_missao37.style.backgroundColor = color1
    
}else{
    id_missao37.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_38 == 1 ){
    id_missao38.style.backgroundColor = color1
    
}else{
    id_missao38.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_39 == 1 ){
    id_missao39.style.backgroundColor = color1
    
}else{
    id_missao39.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_40 == 1 ){
    id_missao40.style.backgroundColor = color1
    
}else{
    id_missao40.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_41 == 1 ){
    id_missao41.style.backgroundColor = color1
    
}else{
    id_missao41.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_42 == 1 ){
    id_missao42.style.backgroundColor = color1
    
}else{
    id_missao42.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_43 == 1 ){
    id_missao43.style.backgroundColor = color1
    
}else{
    id_missao43.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_44 == 1 ){
    id_missao44.style.backgroundColor = color1
    
}else{
    id_missao44.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_45 == 1 ){
    id_missao45.style.backgroundColor = color1
    
}else{
    id_missao45.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_46 == 1 ){
    id_missao46.style.backgroundColor = color1
    
}else{
    id_missao46.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_47 == 1 ){
    id_missao47.style.backgroundColor = color1
    
}else{
    id_missao47.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_48 == 1 ){
    id_missao48.style.backgroundColor = color1
    
}else{
    id_missao48.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_49 == 1 ){
    id_missao49.style.backgroundColor = color1
    
}else{
    id_missao49.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_50 == 1 ){
    id_missao50.style.backgroundColor = color1
    
}else{
    id_missao50.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_51 == 1 ){
    id_missao51.style.backgroundColor = color1
    
}else{
    id_missao51.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_52 == 1 ){
    id_missao52.style.backgroundColor = color1
    
}else{
    id_missao52.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_53 == 1 ){
    id_missao53.style.backgroundColor = color1
    
}else{
    id_missao53.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_54 == 1 ){
    id_missao54.style.backgroundColor = color1
    
}else{
    id_missao54.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_55 == 1 ){
    id_missao55.style.backgroundColor = color1
    
}else{
    id_missao55.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_56 == 1 ){
    id_missao56.style.backgroundColor = color1
    
}else{
    id_missao56.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_57 == 1 ){
    id_missao57.style.backgroundColor = color1
    
}else{
    id_missao57.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_58 == 1 ){
    id_missao58.style.backgroundColor = color1
    
}else{
    id_missao58.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_59 == 1 ){
    id_missao59.style.backgroundColor = color1
    
}else{
    id_missao59.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_60 == 1 ){
    id_missao60.style.backgroundColor = color1
    
}else{
    id_missao60.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_61 == 1 ){
    id_missao61.style.backgroundColor = color1
    
}else{
    id_missao61.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_62 == 1 ){
    id_missao62.style.backgroundColor = color1
    
}else{
    id_missao62.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_63 == 1 ){
    id_missao63.style.backgroundColor = color1
    
}else{
    id_missao63.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_64 == 1 ){
    id_missao64.style.backgroundColor = color1
    
}else{
    id_missao64.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_65 == 1 ){
    id_missao65.style.backgroundColor = color1
    
}else{
    id_missao65.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_66 == 1 ){
    id_missao66.style.backgroundColor = color1
    
}else{
    id_missao66.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_67 == 1 ){
    id_missao67.style.backgroundColor = color1
    
}else{
    id_missao67.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_68 == 1 ){
    id_missao68.style.backgroundColor = color1
    
}else{
    id_missao68.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_69 == 1 ){
    id_missao69.style.backgroundColor = color1
    
}else{
    id_missao69.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_70 == 1 ){
    id_missao70.style.backgroundColor = color1
    
}else{
    id_missao70.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_71 == 1 ){
    id_missao71.style.backgroundColor = color1
    
}else{
    id_missao71.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_72 == 1 ){
    id_missao72.style.backgroundColor = color1
    
}else{
    id_missao72.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_73 == 1 ){
    id_missao73.style.backgroundColor = color1
    
}else{
    id_missao73.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_74 == 1 ){
    id_missao74.style.backgroundColor = color1
    
}else{
    id_missao74.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_75 == 1 ){
    id_missao75.style.backgroundColor = color1
    
}else{
    id_missao75.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_76 == 1 ){
    id_missao76.style.backgroundColor = color1
    
}else{
    id_missao76.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_77 == 1 ){
    id_missao77.style.backgroundColor = color1
    
}else{
    id_missao77.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_78 == 1 ){
    id_missao78.style.backgroundColor = color1
    
}else{
    id_missao78.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_79 == 1 ){
    id_missao79.style.backgroundColor = color1
    
}else{
    id_missao79.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_80 == 1 ){
    id_missao80.style.backgroundColor = color1
    
}else{
    id_missao80.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_81 == 1 ){
    id_missao81.style.backgroundColor = color1
    
}else{
    id_missao81.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_82 == 1 ){
    id_missao82.style.backgroundColor = color1
    
}else{
    id_missao82.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_83 == 1 ){
    id_missao83.style.backgroundColor = color1
    
}else{
    id_missao83.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_84 == 1 ){
    id_missao84.style.backgroundColor = color1
    
}else{
    id_missao84.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_85 == 1 ){
    id_missao85.style.backgroundColor = color1
    
}else{
    id_missao85.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_86 == 1 ){
    id_missao86.style.backgroundColor = color1
    
}else{
    id_missao86.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_87 == 1 ){
    id_missao87.style.backgroundColor = color1
    
}else{
    id_missao87.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_88 == 1 ){
    id_missao88.style.backgroundColor = color1
    
}else{
    id_missao88.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_89 == 1 ){
    id_missao89.style.backgroundColor = color1
    
}else{
    id_missao89.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_90 == 1 ){
    id_missao90.style.backgroundColor = color1
    
}else{
    id_missao90.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_91 == 1 ){
    id_missao91.style.backgroundColor = color1
    
}else{
    id_missao91.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_92 == 1 ){
    id_missao92.style.backgroundColor = color1
    
}else{
    id_missao92.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_93 == 1 ){
    id_missao93.style.backgroundColor = color1
    
}else{
    id_missao93.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_94 == 1 ){
    id_missao94.style.backgroundColor = color1
    
}else{
    id_missao94.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_95 == 1 ){
    id_missao95.style.backgroundColor = color1
    
}else{
    id_missao95.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_96 == 1 ){
    id_missao96.style.backgroundColor = color1
    
}else{
    id_missao96.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_97 == 1 ){
    id_missao97.style.backgroundColor = color1
    
}else{
    id_missao97.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_98 == 1 ){
    id_missao98.style.backgroundColor = color1
    
}else{
    id_missao98.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_99 == 1 ){
    id_missao99.style.backgroundColor = color1
    
}else{
    id_missao99.style.backgroundColor = color2

}

if(sessionStorage.MISSAO_100 == 1 ){
    id_missao100.style.backgroundColor = color1
    
}else{
    id_missao100.style.backgroundColor = color2

}

}


function faltantes() {
       for(var i = 1; i<= missoes.length ; i++){
if(sessionStorage.MISSAO_1 == 0){
    div_cardMissao1.style.display = `block`
}else{
    div_cardMissao1.style.display = `none`
}
if(sessionStorage.MISSAO_2 == 0){
    div_cardMissao2.style.display = `block`
}else{
    div_cardMissao2.style.display = `none`
}
if(sessionStorage.MISSAO_3 == 0){
    div_cardMissao3.style.display = `block`
}else{
    div_cardMissao3.style.display = `none`
}
if(sessionStorage.MISSAO_4 == 0){
    div_cardMissao4.style.display = `block`
}else{
    div_cardMissao4.style.display = `none`
}
if(sessionStorage.MISSAO_5 == 0){
    div_cardMissao5.style.display = `block`
}else{
    div_cardMissao5.style.display = `none`
}
if(sessionStorage.MISSAO_6 == 0){
    div_cardMissao6.style.display = `block`
}else{
    div_cardMissao6.style.display = `none`
}
if(sessionStorage.MISSAO_7 == 0){
    div_cardMissao7.style.display = `block`
}else{
    div_cardMissao7.style.display = `none`
}
if(sessionStorage.MISSAO_8 == 0){
    div_cardMissao8.style.display = `block`
}else{
    div_cardMissao8.style.display = `none`
}
if(sessionStorage.MISSAO_9 == 0){
    div_cardMissao9.style.display = `block`
}else{
    div_cardMissao9.style.display = `none`
}
if(sessionStorage.MISSAO_10 == 0){
    div_cardMissao10.style.display = `block`
}else{
    div_cardMissao10.style.display = `none`
}
if(sessionStorage.MISSAO_11 == 0){
    div_cardMissao11.style.display = `block`
}else{
    div_cardMissao11.style.display = `none`
}
if(sessionStorage.MISSAO_12 == 0){
    div_cardMissao12.style.display = `block`
}else{
    div_cardMissao12.style.display = `none`
}
if(sessionStorage.MISSAO_13 == 0){
    div_cardMissao13.style.display = `block`
}else{
    div_cardMissao13.style.display = `none`
}
if(sessionStorage.MISSAO_14 == 0){
    div_cardMissao14.style.display = `block`
}else{
    div_cardMissao14.style.display = `none`
}
if(sessionStorage.MISSAO_15 == 0){
    div_cardMissao15.style.display = `block`
}else{
    div_cardMissao15.style.display = `none`
}
if(sessionStorage.MISSAO_16 == 0){
    div_cardMissao16.style.display = `block`
}else{
    div_cardMissao16.style.display = `none`
}
if(sessionStorage.MISSAO_17 == 0){
    div_cardMissao17.style.display = `block`
}else{
    div_cardMissao17.style.display = `none`
}
if(sessionStorage.MISSAO_18 == 0){
    div_cardMissao18.style.display = `block`
}else{
    div_cardMissao18.style.display = `none`
}
if(sessionStorage.MISSAO_19 == 0){
    div_cardMissao19.style.display = `block`
}else{
    div_cardMissao19.style.display = `none`
}
if(sessionStorage.MISSAO_20 == 0){
    div_cardMissao20.style.display = `block`
}else{
    div_cardMissao20.style.display = `none`
}
if(sessionStorage.MISSAO_21 == 0){
    div_cardMissao21.style.display = `block`
}else{
    div_cardMissao21.style.display = `none`
}
if(sessionStorage.MISSAO_22 == 0){
    div_cardMissao22.style.display = `block`
}else{
    div_cardMissao22.style.display = `none`
}
if(sessionStorage.MISSAO_23 == 0){
    div_cardMissao23.style.display = `block`
}else{
    div_cardMissao23.style.display = `none`
}
if(sessionStorage.MISSAO_24 == 0){
    div_cardMissao24.style.display = `block`
}else{
    div_cardMissao24.style.display = `none`
}
if(sessionStorage.MISSAO_25 == 0){
    div_cardMissao25.style.display = `block`
}else{
    div_cardMissao25.style.display = `none`
}
if(sessionStorage.MISSAO_26 == 0){
    div_cardMissao26.style.display = `block`
}else{
    div_cardMissao26.style.display = `none`
}
if(sessionStorage.MISSAO_27 == 0){
    div_cardMissao27.style.display = `block`
}else{
    div_cardMissao27.style.display = `none`
}
if(sessionStorage.MISSAO_28 == 0){
    div_cardMissao28.style.display = `block`
}else{
    div_cardMissao28.style.display = `none`
}
if(sessionStorage.MISSAO_29 == 0){
    div_cardMissao29.style.display = `block`
}else{
    div_cardMissao29.style.display = `none`
}
if(sessionStorage.MISSAO_30 == 0){
    div_cardMissao30.style.display = `block`
}else{
    div_cardMissao30.style.display = `none`
}
if(sessionStorage.MISSAO_31 == 0){
    div_cardMissao31.style.display = `block`
}else{
    div_cardMissao31.style.display = `none`
}
if(sessionStorage.MISSAO_32 == 0){
    div_cardMissao32.style.display = `block`
}else{
    div_cardMissao32.style.display = `none`
}
if(sessionStorage.MISSAO_33 == 0){
    div_cardMissao33.style.display = `block`
}else{
    div_cardMissao33.style.display = `none`
}
if(sessionStorage.MISSAO_34 == 0){
    div_cardMissao34.style.display = `block`
}else{
    div_cardMissao34.style.display = `none`
}
if(sessionStorage.MISSAO_35 == 0){
    div_cardMissao35.style.display = `block`
}else{
    div_cardMissao35.style.display = `none`
}
if(sessionStorage.MISSAO_36 == 0){
    div_cardMissao36.style.display = `block`
}else{
    div_cardMissao36.style.display = `none`
}
if(sessionStorage.MISSAO_37 == 0){
    div_cardMissao37.style.display = `block`
}else{
    div_cardMissao37.style.display = `none`
}
if(sessionStorage.MISSAO_38 == 0){
    div_cardMissao38.style.display = `block`
}else{
    div_cardMissao38.style.display = `none`
}
if(sessionStorage.MISSAO_39 == 0){
    div_cardMissao39.style.display = `block`
}else{
    div_cardMissao39.style.display = `none`
}
if(sessionStorage.MISSAO_40 == 0){
    div_cardMissao40.style.display = `block`
}else{
    div_cardMissao40.style.display = `none`
}
if(sessionStorage.MISSAO_41 == 0){
    div_cardMissao41.style.display = `block`
}else{
    div_cardMissao41.style.display = `none`
}
if(sessionStorage.MISSAO_42 == 0){
    div_cardMissao42.style.display = `block`
}else{
    div_cardMissao42.style.display = `none`
}
if(sessionStorage.MISSAO_43 == 0){
    div_cardMissao43.style.display = `block`
}else{
    div_cardMissao43.style.display = `none`
}
if(sessionStorage.MISSAO_44 == 0){
    div_cardMissao44.style.display = `block`
}else{
    div_cardMissao44.style.display = `none`
}
if(sessionStorage.MISSAO_45 == 0){
    div_cardMissao45.style.display = `block`
}else{
    div_cardMissao45.style.display = `none`
}
if(sessionStorage.MISSAO_46 == 0){
    div_cardMissao46.style.display = `block`
}else{
    div_cardMissao46.style.display = `none`
}
if(sessionStorage.MISSAO_47 == 0){
    div_cardMissao47.style.display = `block`
}else{
    div_cardMissao47.style.display = `none`
}
if(sessionStorage.MISSAO_48 == 0){
    div_cardMissao48.style.display = `block`
}else{
    div_cardMissao48.style.display = `none`
}
if(sessionStorage.MISSAO_49 == 0){
    div_cardMissao49.style.display = `block`
}else{
    div_cardMissao49.style.display = `none`
}
if(sessionStorage.MISSAO_50 == 0){
    div_cardMissao50.style.display = `block`
}else{
    div_cardMissao50.style.display = `none`
}
if(sessionStorage.MISSAO_51 == 0){
    div_cardMissao51.style.display = `block`
}else{
    div_cardMissao51.style.display = `none`
}
if(sessionStorage.MISSAO_52 == 0){
    div_cardMissao52.style.display = `block`
}else{
    div_cardMissao52.style.display = `none`
}
if(sessionStorage.MISSAO_53 == 0){
    div_cardMissao53.style.display = `block`
}else{
    div_cardMissao53.style.display = `none`
}
if(sessionStorage.MISSAO_54 == 0){
    div_cardMissao54.style.display = `block`
}else{
    div_cardMissao54.style.display = `none`
}
if(sessionStorage.MISSAO_55 == 0){
    div_cardMissao55.style.display = `block`
}else{
    div_cardMissao55.style.display = `none`
}
if(sessionStorage.MISSAO_56 == 0){
    div_cardMissao56.style.display = `block`
}else{
    div_cardMissao56.style.display = `none`
}
if(sessionStorage.MISSAO_57 == 0){
    div_cardMissao57.style.display = `block`
}else{
    div_cardMissao57.style.display = `none`
}
if(sessionStorage.MISSAO_58 == 0){
    div_cardMissao58.style.display = `block`
}else{
    div_cardMissao58.style.display = `none`
}
if(sessionStorage.MISSAO_59 == 0){
    div_cardMissao59.style.display = `block`
}else{
    div_cardMissao59.style.display = `none`
}
if(sessionStorage.MISSAO_60 == 0){
    div_cardMissao60.style.display = `block`
}else{
    div_cardMissao60.style.display = `none`
}
if(sessionStorage.MISSAO_61 == 0){
    div_cardMissao61.style.display = `block`
}else{
    div_cardMissao61.style.display = `none`
}
if(sessionStorage.MISSAO_62 == 0){
    div_cardMissao62.style.display = `block`
}else{
    div_cardMissao62.style.display = `none`
}
if(sessionStorage.MISSAO_63 == 0){
    div_cardMissao63.style.display = `block`
}else{
    div_cardMissao63.style.display = `none`
}
if(sessionStorage.MISSAO_64 == 0){
    div_cardMissao64.style.display = `block`
}else{
    div_cardMissao64.style.display = `none`
}
if(sessionStorage.MISSAO_65 == 0){
    div_cardMissao65.style.display = `block`
}else{
    div_cardMissao65.style.display = `none`
}
if(sessionStorage.MISSAO_66 == 0){
    div_cardMissao66.style.display = `block`
}else{
    div_cardMissao66.style.display = `none`
}
if(sessionStorage.MISSAO_67 == 0){
    div_cardMissao67.style.display = `block`
}else{
    div_cardMissao67.style.display = `none`
}
if(sessionStorage.MISSAO_68 == 0){
    div_cardMissao68.style.display = `block`
}else{
    div_cardMissao68.style.display = `none`
}
if(sessionStorage.MISSAO_69 == 0){
    div_cardMissao69.style.display = `block`
}else{
    div_cardMissao69.style.display = `none`
}
if(sessionStorage.MISSAO_70 == 0){
    div_cardMissao70.style.display = `block`
}else{
    div_cardMissao70.style.display = `none`
}
if(sessionStorage.MISSAO_71 == 0){
    div_cardMissao71.style.display = `block`
}else{
    div_cardMissao71.style.display = `none`
}
if(sessionStorage.MISSAO_72 == 0){
    div_cardMissao72.style.display = `block`
}else{
    div_cardMissao72.style.display = `none`
}
if(sessionStorage.MISSAO_73 == 0){
    div_cardMissao73.style.display = `block`
}else{
    div_cardMissao73.style.display = `none`
}
if(sessionStorage.MISSAO_74 == 0){
    div_cardMissao74.style.display = `block`
}else{
    div_cardMissao74.style.display = `none`
}
if(sessionStorage.MISSAO_75 == 0){
    div_cardMissao75.style.display = `block`
}else{
    div_cardMissao75.style.display = `none`
}
if(sessionStorage.MISSAO_76 == 0){
    div_cardMissao76.style.display = `block`
}else{
    div_cardMissao76.style.display = `none`
}
if(sessionStorage.MISSAO_77 == 0){
    div_cardMissao77.style.display = `block`
}else{
    div_cardMissao77.style.display = `none`
}
if(sessionStorage.MISSAO_78 == 0){
    div_cardMissao78.style.display = `block`
}else{
    div_cardMissao78.style.display = `none`
}
if(sessionStorage.MISSAO_79 == 0){
    div_cardMissao79.style.display = `block`
}else{
    div_cardMissao79.style.display = `none`
}
if(sessionStorage.MISSAO_80 == 0){
    div_cardMissao80.style.display = `block`
}else{
    div_cardMissao80.style.display = `none`
}
if(sessionStorage.MISSAO_81 == 0){
    div_cardMissao81.style.display = `block`
}else{
    div_cardMissao81.style.display = `none`
}
if(sessionStorage.MISSAO_82 == 0){
    div_cardMissao82.style.display = `block`
}else{
    div_cardMissao82.style.display = `none`
}
if(sessionStorage.MISSAO_83 == 0){
    div_cardMissao83.style.display = `block`
}else{
    div_cardMissao83.style.display = `none`
}
if(sessionStorage.MISSAO_84 == 0){
    div_cardMissao84.style.display = `block`
}else{
    div_cardMissao84.style.display = `none`
}
if(sessionStorage.MISSAO_85 == 0){
    div_cardMissao85.style.display = `block`
}else{
    div_cardMissao85.style.display = `none`
}
if(sessionStorage.MISSAO_86 == 0){
    div_cardMissao86.style.display = `block`
}else{
    div_cardMissao86.style.display = `none`
}
if(sessionStorage.MISSAO_87 == 0){
    div_cardMissao87.style.display = `block`
}else{
    div_cardMissao87.style.display = `none`
}
if(sessionStorage.MISSAO_88 == 0){
    div_cardMissao88.style.display = `block`
}else{
    div_cardMissao88.style.display = `none`
}
if(sessionStorage.MISSAO_89 == 0){
    div_cardMissao89.style.display = `block`
}else{
    div_cardMissao89.style.display = `none`
}
if(sessionStorage.MISSAO_90 == 0){
    div_cardMissao90.style.display = `block`
}else{
    div_cardMissao90.style.display = `none`
}
if(sessionStorage.MISSAO_91 == 0){
    div_cardMissao91.style.display = `block`
}else{
    div_cardMissao91.style.display = `none`
}
if(sessionStorage.MISSAO_92 == 0){
    div_cardMissao92.style.display = `block`
}else{
    div_cardMissao92.style.display = `none`
}
if(sessionStorage.MISSAO_93 == 0){
    div_cardMissao93.style.display = `block`
}else{
    div_cardMissao93.style.display = `none`
}
if(sessionStorage.MISSAO_94 == 0){
    div_cardMissao94.style.display = `block`
}else{
    div_cardMissao94.style.display = `none`
}
if(sessionStorage.MISSAO_95 == 0){
    div_cardMissao95.style.display = `block`
}else{
    div_cardMissao95.style.display = `none`
}
if(sessionStorage.MISSAO_96 == 0){
    div_cardMissao96.style.display = `block`
}else{
    div_cardMissao96.style.display = `none`
}
if(sessionStorage.MISSAO_97 == 0){
    div_cardMissao97.style.display = `block`
}else{
    div_cardMissao97.style.display = `none`
}
if(sessionStorage.MISSAO_98 == 0){
    div_cardMissao98.style.display = `block`
}else{
    div_cardMissao98.style.display = `none`
}
if(sessionStorage.MISSAO_99 == 0){
    div_cardMissao99.style.display = `block`
}else{
    div_cardMissao99.style.display = `none`
}
if(sessionStorage.MISSAO_100 == 0){
    div_cardMissao100.style.display = `block`
}else{
    div_cardMissao100.style.display = `none`
}
    }
}
function feitas() {
    for(var i = 1; i<= missoes.length ; i++){
if(sessionStorage.MISSAO_1 == 1){
    div_cardMissao1.style.display = `block`
}else{
    div_cardMissao1.style.display = `none`
}
if(sessionStorage.MISSAO_2 == 1){
    div_cardMissao2.style.display = `block`
}else{
    div_cardMissao2.style.display = `none`
}
if(sessionStorage.MISSAO_3 == 1){
    div_cardMissao3.style.display = `block`
}else{
    div_cardMissao3.style.display = `none`
}
if(sessionStorage.MISSAO_4 == 1){
    div_cardMissao4.style.display = `block`
}else{
    div_cardMissao4.style.display = `none`
}
if(sessionStorage.MISSAO_5 == 1){
    div_cardMissao5.style.display = `block`
}else{
    div_cardMissao5.style.display = `none`
}
if(sessionStorage.MISSAO_6 == 1){
    div_cardMissao6.style.display = `block`
}else{
    div_cardMissao6.style.display = `none`
}
if(sessionStorage.MISSAO_7 == 1){
    div_cardMissao7.style.display = `block`
}else{
    div_cardMissao7.style.display = `none`
}
if(sessionStorage.MISSAO_8 == 1){
    div_cardMissao8.style.display = `block`
}else{
    div_cardMissao8.style.display = `none`
}
if(sessionStorage.MISSAO_9 == 1){
    div_cardMissao9.style.display = `block`
}else{  
    div_cardMissao9.style.display = `none`
}
if(sessionStorage.MISSAO_10 == 1){
    div_cardMissao10.style.display = `block`
}else{
    div_cardMissao10.style.display = `none`
}
if(sessionStorage.MISSAO_11 == 1){
    div_cardMissao11.style.display = `block`
}else{
    div_cardMissao11.style.display = `none`
}
if(sessionStorage.MISSAO_12 == 1){
    div_cardMissao12.style.display = `block`
}else{
    div_cardMissao12.style.display = `none`
}
if(sessionStorage.MISSAO_13 == 1){
    div_cardMissao13.style.display = `block`
}else{
    div_cardMissao13.style.display = `none`
}
if(sessionStorage.MISSAO_14 == 1){
    div_cardMissao14.style.display = `block`
}else{
    div_cardMissao14.style.display = `none`
}
if(sessionStorage.MISSAO_15 == 1){
    div_cardMissao15.style.display = `block`
}else{
    div_cardMissao15.style.display = `none`
}
if(sessionStorage.MISSAO_16 == 1){
    div_cardMissao16.style.display = `block`
}else{
    div_cardMissao16.style.display = `none`
}
if(sessionStorage.MISSAO_17 == 1){
    div_cardMissao17.style.display = `block`
}else{
    div_cardMissao17.style.display = `none`
}
if(sessionStorage.MISSAO_18 == 1){
    div_cardMissao18.style.display = `block`
}else{
    div_cardMissao18.style.display = `none`
}
if(sessionStorage.MISSAO_19 == 1){
    div_cardMissao19.style.display = `block`
}else{
    div_cardMissao19.style.display = `none`
}
if(sessionStorage.MISSAO_20 == 1){
    div_cardMissao20.style.display = `block`
}else{
    div_cardMissao20.style.display = `none`
}
if(sessionStorage.MISSAO_21 == 1){
    div_cardMissao21.style.display = `block`
}else{
    div_cardMissao21.style.display = `none`
}
if(sessionStorage.MISSAO_22 == 1){
    div_cardMissao22.style.display = `block`
}else{
    div_cardMissao22.style.display = `none`
}
if(sessionStorage.MISSAO_23 == 1){
    div_cardMissao23.style.display = `block`
}else{
    div_cardMissao23.style.display = `none`
}
if(sessionStorage.MISSAO_24 == 1){
    div_cardMissao24.style.display = `block`
}else{
    div_cardMissao24.style.display = `none`
}
if(sessionStorage.MISSAO_25 == 1){
    div_cardMissao25.style.display = `block`
}else{
    div_cardMissao25.style.display = `none`
}
if(sessionStorage.MISSAO_26 == 1){
    div_cardMissao26.style.display = `block`
}else{
    div_cardMissao26.style.display = `none`
}
if(sessionStorage.MISSAO_27 == 1){
    div_cardMissao27.style.display = `block`
}else{
    div_cardMissao27.style.display = `none`
}
if(sessionStorage.MISSAO_28 == 1){
    div_cardMissao28.style.display = `block`
}else{
    div_cardMissao28.style.display = `none`
}
if(sessionStorage.MISSAO_29 == 1){
    div_cardMissao29.style.display = `block`
}else{
    div_cardMissao29.style.display = `none`
}
if(sessionStorage.MISSAO_30 == 1){
    div_cardMissao30.style.display = `block`
}else{
    div_cardMissao30.style.display = `none`
}
if(sessionStorage.MISSAO_31 == 1){
    div_cardMissao31.style.display = `block`
}else{
    div_cardMissao31.style.display = `none`
}
if(sessionStorage.MISSAO_32 == 1){
    div_cardMissao32.style.display = `block`
}else{
    div_cardMissao32.style.display = `none`
}
if(sessionStorage.MISSAO_33 == 1){
    div_cardMissao33.style.display = `block`
}else{
    div_cardMissao33.style.display = `none`
}
if(sessionStorage.MISSAO_34 == 1){
    div_cardMissao34.style.display = `block`
}else{
    div_cardMissao34.style.display = `none`
}
if(sessionStorage.MISSAO_35 == 1){
    div_cardMissao35.style.display = `block`
}else{
    div_cardMissao35.style.display = `none`
}
if(sessionStorage.MISSAO_36 == 1){
    div_cardMissao36.style.display = `block`
}else{
    div_cardMissao36.style.display = `none`
}
if(sessionStorage.MISSAO_37 == 1){
    div_cardMissao37.style.display = `block`
}else{
    div_cardMissao37.style.display = `none`
}
if(sessionStorage.MISSAO_38 == 1){
    div_cardMissao38.style.display = `block`
}else{
    div_cardMissao38.style.display = `none`
}
if(sessionStorage.MISSAO_39 == 1){
    div_cardMissao39.style.display = `block`
}else{
    div_cardMissao39.style.display = `none`
}
if(sessionStorage.MISSAO_40 == 1){
    div_cardMissao40.style.display = `block`
}else{
    div_cardMissao40.style.display = `none`
}
if(sessionStorage.MISSAO_41 == 1){
    div_cardMissao41.style.display = `block`
}else{
    div_cardMissao41.style.display = `none`
}
if(sessionStorage.MISSAO_42 == 1){
    div_cardMissao42.style.display = `block`
}else{
    div_cardMissao42.style.display = `none`
}
if(sessionStorage.MISSAO_43 == 1){
    div_cardMissao43.style.display = `block`
}else{
    div_cardMissao43.style.display = `none`
}
if(sessionStorage.MISSAO_44 == 1){
    div_cardMissao44.style.display = `block`
}else{
    div_cardMissao44.style.display = `none`
}
if(sessionStorage.MISSAO_45 == 1){
    div_cardMissao45.style.display = `block`
}else{
    div_cardMissao45.style.display = `none`
}
if(sessionStorage.MISSAO_46 == 1){
    div_cardMissao46.style.display = `block`
}else{
    div_cardMissao46.style.display = `none`
}
if(sessionStorage.MISSAO_47 == 1){
    div_cardMissao47.style.display = `block`
}else{
    div_cardMissao47.style.display = `none`
}
if(sessionStorage.MISSAO_48 == 1){
    div_cardMissao48.style.display = `block`
}else{
    div_cardMissao48.style.display = `none`
}
if(sessionStorage.MISSAO_49 == 1){
    div_cardMissao49.style.display = `block`
}else{
    div_cardMissao49.style.display = `none`
}
if(sessionStorage.MISSAO_50 == 1){
    div_cardMissao50.style.display = `block`
}else{
    div_cardMissao50.style.display = `none`
}
if(sessionStorage.MISSAO_51 == 1){
    div_cardMissao51.style.display = `block`
}else{
    div_cardMissao51.style.display = `none`
}
if(sessionStorage.MISSAO_52 == 1){
    div_cardMissao52.style.display = `block`
}else{
    div_cardMissao52.style.display = `none`
}
if(sessionStorage.MISSAO_53 == 1){
    div_cardMissao53.style.display = `block`
}else{
    div_cardMissao53.style.display = `none`
}
if(sessionStorage.MISSAO_54 == 1){
    div_cardMissao54.style.display = `block`
}else{
    div_cardMissao54.style.display = `none`
}
if(sessionStorage.MISSAO_55 == 1){
    div_cardMissao55.style.display = `block`
}else{
    div_cardMissao55.style.display = `none`
}
if(sessionStorage.MISSAO_56 == 1){
    div_cardMissao56.style.display = `block`
}else{
    div_cardMissao56.style.display = `none`
}
if(sessionStorage.MISSAO_57 == 1){
    div_cardMissao57.style.display = `block`
}else{
    div_cardMissao57.style.display = `none`
}
if(sessionStorage.MISSAO_58 == 1){
    div_cardMissao58.style.display = `block`
}else{
    div_cardMissao58.style.display = `none`
}
if(sessionStorage.MISSAO_59 == 1){
    div_cardMissao59.style.display = `block`
}else{
    div_cardMissao59.style.display = `none`
}
if(sessionStorage.MISSAO_60 == 1){
    div_cardMissao60.style.display = `block`
}else{
    div_cardMissao60.style.display = `none`
}
if(sessionStorage.MISSAO_61 == 1){
    div_cardMissao61.style.display = `block`
}else{
    div_cardMissao61.style.display = `none`
}
if(sessionStorage.MISSAO_62 == 1){
    div_cardMissao62.style.display = `block`
}else{
    div_cardMissao62.style.display = `none`
}
if(sessionStorage.MISSAO_63 == 1){
    div_cardMissao63.style.display = `block`
}else{
    div_cardMissao63.style.display = `none`
}
if(sessionStorage.MISSAO_64 == 1){
    div_cardMissao64.style.display = `block`
}else{
    div_cardMissao64.style.display = `none`
}
if(sessionStorage.MISSAO_65 == 1){
    div_cardMissao65.style.display = `block`
}else{
    div_cardMissao65.style.display = `none`
}
if(sessionStorage.MISSAO_66 == 1){
    div_cardMissao66.style.display = `block`
}else{
    div_cardMissao66.style.display = `none`
}
if(sessionStorage.MISSAO_67 == 1){
    div_cardMissao67.style.display = `block`
}else{
    div_cardMissao67.style.display = `none`
}
if(sessionStorage.MISSAO_68 == 1){
    div_cardMissao68.style.display = `block`
}else{
    div_cardMissao68.style.display = `none`
}
if(sessionStorage.MISSAO_69 == 1){
    div_cardMissao69.style.display = `block`
}else{
    div_cardMissao69.style.display = `none`
}
if(sessionStorage.MISSAO_70 == 1){
    div_cardMissao70.style.display = `block`
}else{
    div_cardMissao70.style.display = `none`
}
if(sessionStorage.MISSAO_71 == 1){
    div_cardMissao71.style.display = `block`
}else{
    div_cardMissao71.style.display = `none`
}
if(sessionStorage.MISSAO_72 == 1){
    div_cardMissao72.style.display = `block`
}else{
    div_cardMissao72.style.display = `none`
}
if(sessionStorage.MISSAO_73 == 1){
    div_cardMissao73.style.display = `block`
}else{
    div_cardMissao73.style.display = `none`
}
if(sessionStorage.MISSAO_74 == 1){
    div_cardMissao74.style.display = `block`
}else{
    div_cardMissao74.style.display = `none`
}
if(sessionStorage.MISSAO_75 == 1){
    div_cardMissao75.style.display = `block`
}else{
    div_cardMissao75.style.display = `none`
}
if(sessionStorage.MISSAO_76 == 1){
    div_cardMissao76.style.display = `block`
}else{
    div_cardMissao76.style.display = `none`
}
if(sessionStorage.MISSAO_77 == 1){
    div_cardMissao77.style.display = `block`
}else{
    div_cardMissao77.style.display = `none`
}
if(sessionStorage.MISSAO_78 == 1){
    div_cardMissao78.style.display = `block`
}else{
    div_cardMissao78.style.display = `none`
}
if(sessionStorage.MISSAO_79 == 1){
    div_cardMissao79.style.display = `block`
}else{
    div_cardMissao79.style.display = `none`
}
if(sessionStorage.MISSAO_80 == 1){
    div_cardMissao80.style.display = `block`
}else{
    div_cardMissao80.style.display = `none`
}
if(sessionStorage.MISSAO_81 == 1){
    div_cardMissao81.style.display = `block`
}else{
    div_cardMissao81.style.display = `none`
}
if(sessionStorage.MISSAO_82 == 1){
    div_cardMissao82.style.display = `block`
}else{
    div_cardMissao82.style.display = `none`
}
if(sessionStorage.MISSAO_83 == 1){
    div_cardMissao83.style.display = `block`
}else{
    div_cardMissao83.style.display = `none`
}
if(sessionStorage.MISSAO_84 == 1){
    div_cardMissao84.style.display = `block`
}else{
    div_cardMissao84.style.display = `none`
}
if(sessionStorage.MISSAO_85 == 1){
    div_cardMissao85.style.display = `block`
}else{
    div_cardMissao85.style.display = `none`
}
if(sessionStorage.MISSAO_86 == 1){
    div_cardMissao86.style.display = `block`
}else{
    div_cardMissao86.style.display = `none`
}
if(sessionStorage.MISSAO_87 == 1){
    div_cardMissao87.style.display = `block`
}else{
    div_cardMissao87.style.display = `none`
}
if(sessionStorage.MISSAO_88 == 1){
    div_cardMissao88.style.display = `block`
}else{
    div_cardMissao88.style.display = `none`
}
if(sessionStorage.MISSAO_89 == 1){
    div_cardMissao89.style.display = `block`
}else{
    div_cardMissao89.style.display = `none`
}
if(sessionStorage.MISSAO_90 == 1){
    div_cardMissao90.style.display = `block`
}else{
    div_cardMissao90.style.display = `none`
}
if(sessionStorage.MISSAO_91 == 1){
    div_cardMissao91.style.display = `block`
}else{
    div_cardMissao91.style.display = `none`
}
if(sessionStorage.MISSAO_92 == 1){
    div_cardMissao92.style.display = `block`
}else{
    div_cardMissao92.style.display = `none`
}
if(sessionStorage.MISSAO_93 == 1){
    div_cardMissao93.style.display = `block`
}else{
    div_cardMissao93.style.display = `none`
}
if(sessionStorage.MISSAO_94 == 1){
    div_cardMissao94.style.display = `block`
}else{
    div_cardMissao94.style.display = `none`
}
if(sessionStorage.MISSAO_95 == 1){
    div_cardMissao95.style.display = `block`
}else{
    div_cardMissao95.style.display = `none`
}
if(sessionStorage.MISSAO_96 == 1){
    div_cardMissao96.style.display = `block`
}else{
    div_cardMissao96.style.display = `none`
}
if(sessionStorage.MISSAO_97 == 1){
    div_cardMissao97.style.display = `block`
}else{
    div_cardMissao97.style.display = `none`
}
if(sessionStorage.MISSAO_98 == 1){
    div_cardMissao98.style.display = `block`
}else{
    div_cardMissao98.style.display = `none`
}
if(sessionStorage.MISSAO_99 == 1){
    div_cardMissao99.style.display = `block`
}else{
    div_cardMissao99.style.display = `none`
}
if(sessionStorage.MISSAO_100 == 1){
    div_cardMissao100.style.display = `block`
}else{
    div_cardMissao100.style.display = `none`
}

      
    }
}
function todas() {


div_cardMissao1.style.display = `block`
div_cardMissao2.style.display = `block`
div_cardMissao3.style.display = `block`
div_cardMissao4.style.display = `block`
div_cardMissao5.style.display = `block`
div_cardMissao6.style.display = `block`
div_cardMissao7.style.display = `block`
div_cardMissao8.style.display = `block`
div_cardMissao9.style.display = `block`
div_cardMissao10.style.display = `block`
div_cardMissao11.style.display = `block`
div_cardMissao12.style.display = `block`
div_cardMissao13.style.display = `block`
div_cardMissao14.style.display = `block`
div_cardMissao15.style.display = `block`
div_cardMissao16.style.display = `block`
div_cardMissao17.style.display = `block`
div_cardMissao18.style.display = `block`
div_cardMissao19.style.display = `block`
div_cardMissao20.style.display = `block`
div_cardMissao21.style.display = `block`
div_cardMissao22.style.display = `block`
div_cardMissao23.style.display = `block`
div_cardMissao24.style.display = `block`
div_cardMissao25.style.display = `block`
div_cardMissao26.style.display = `block`
div_cardMissao27.style.display = `block`
div_cardMissao28.style.display = `block`
div_cardMissao29.style.display = `block`
div_cardMissao30.style.display = `block`
div_cardMissao31.style.display = `block`
div_cardMissao32.style.display = `block`
div_cardMissao33.style.display = `block`
div_cardMissao34.style.display = `block`
div_cardMissao35.style.display = `block`
div_cardMissao36.style.display = `block`
div_cardMissao37.style.display = `block`
div_cardMissao38.style.display = `block`
div_cardMissao39.style.display = `block`
div_cardMissao40.style.display = `block`
div_cardMissao41.style.display = `block`
div_cardMissao42.style.display = `block`
div_cardMissao43.style.display = `block`
div_cardMissao44.style.display = `block`
div_cardMissao45.style.display = `block`
div_cardMissao46.style.display = `block`
div_cardMissao47.style.display = `block`
div_cardMissao48.style.display = `block`
div_cardMissao49.style.display = `block`
div_cardMissao50.style.display = `block`
div_cardMissao51.style.display = `block`
div_cardMissao52.style.display = `block`
div_cardMissao53.style.display = `block`
div_cardMissao54.style.display = `block`
div_cardMissao55.style.display = `block`
div_cardMissao56.style.display = `block`
div_cardMissao57.style.display = `block`
div_cardMissao58.style.display = `block`
div_cardMissao59.style.display = `block`
div_cardMissao60.style.display = `block`
div_cardMissao61.style.display = `block`
div_cardMissao62.style.display = `block`
div_cardMissao63.style.display = `block`
div_cardMissao64.style.display = `block`
div_cardMissao65.style.display = `block`
div_cardMissao66.style.display = `block`
div_cardMissao67.style.display = `block`
div_cardMissao68.style.display = `block`
div_cardMissao69.style.display = `block`
div_cardMissao70.style.display = `block`
div_cardMissao71.style.display = `block`
div_cardMissao72.style.display = `block`
div_cardMissao73.style.display = `block`
div_cardMissao74.style.display = `block`
div_cardMissao75.style.display = `block`
div_cardMissao76.style.display = `block`
div_cardMissao77.style.display = `block`
div_cardMissao78.style.display = `block`
div_cardMissao79.style.display = `block`
div_cardMissao80.style.display = `block`
div_cardMissao81.style.display = `block`
div_cardMissao82.style.display = `block`
div_cardMissao83.style.display = `block`
div_cardMissao84.style.display = `block`
div_cardMissao85.style.display = `block`
div_cardMissao86.style.display = `block`
div_cardMissao87.style.display = `block`
div_cardMissao88.style.display = `block`
div_cardMissao89.style.display = `block`
div_cardMissao90.style.display = `block`
div_cardMissao91.style.display = `block`
div_cardMissao92.style.display = `block`
div_cardMissao93.style.display = `block`
div_cardMissao94.style.display = `block`
div_cardMissao95.style.display = `block`
div_cardMissao96.style.display = `block`
div_cardMissao97.style.display = `block`
div_cardMissao98.style.display = `block`
div_cardMissao99.style.display = `block`
div_cardMissao100.style.display = `block`
    

}    

