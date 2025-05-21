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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_1 = 0
        color()
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_1 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_2 = 0
        color()
    }
    else if(sessionStorage.MISSAO_2 == 0 ){

        id_missao2.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_2 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_3 = 0
        color()
    }
    else if(sessionStorage.MISSAO_3 == 0 ){

        id_missao3.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_3 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_4 = 0
        color()
    }
    else if(sessionStorage.MISSAO_4 == 0 ){

        id_missao4.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_4 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_5 = 0
        color()
    }
    else if(sessionStorage.MISSAO_5 == 0 ){

        id_missao5.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_5 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_6 = 0
        color()
    }
    else if(sessionStorage.MISSAO_6 == 0 ){

        id_missao6.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_6 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_7 = 0
        color()
    }
    else if(sessionStorage.MISSAO_7 == 0 ){

        id_missao7.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_7 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_8 = 0
        color()
    }
    else if(sessionStorage.MISSAO_8 == 0 ){

        id_missao8.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_8 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_9 = 0
        color()
    }
    else if(sessionStorage.MISSAO_9 == 0 ){

        id_missao9.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_9 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_10 = 0
        color()
    }
    else if(sessionStorage.MISSAO_10 == 0 ){

        id_missao10.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_10 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_11 = 0
        color()
    }
    else if(sessionStorage.MISSAO_11 == 0 ){

        id_missao11.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_11 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_12 = 0
        color()
    }
    else if(sessionStorage.MISSAO_12 == 0 ){

        id_missao12.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_12 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_13 = 0
        color()
    }
    else if(sessionStorage.MISSAO_13 == 0 ){

        id_missao13.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_13 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_14 = 0
        color()
    }
    else if(sessionStorage.MISSAO_14 == 0 ){

        id_missao14.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_14 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_15 = 0
        color()
    }
    else if(sessionStorage.MISSAO_15 == 0 ){

        id_missao15.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_15 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_16 = 0
        color()
    }
    else if(sessionStorage.MISSAO_16 == 0 ){

        id_missao16.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_16 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_17 = 0
        color()
    }
    else if(sessionStorage.MISSAO_17 == 0 ){

        id_missao17.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_17 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_18 = 0
        color()
    }
    else if(sessionStorage.MISSAO_18 == 0 ){

        id_missao18.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_18 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_19 = 0
        color()
    }
    else if(sessionStorage.MISSAO_19 == 0 ){

        id_missao19.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_19 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_20 = 0
        color()
    }
    else if(sessionStorage.MISSAO_20 == 0 ){

        id_missao20.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_20 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_21 = 0
        color()
    }
    else if(sessionStorage.MISSAO_21 == 0 ){

        id_missao21.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_21 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_22 = 0
        color()
    }
    else if(sessionStorage.MISSAO_22 == 0 ){

        id_missao22.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_22 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_23 = 0
        color()
    }
    else if(sessionStorage.MISSAO_23 == 0 ){

        id_missao23.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_23 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_24 = 0
        color()
    }
    else if(sessionStorage.MISSAO_24 == 0 ){

        id_missao24.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_24 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_25 = 0
        color()
    }
    else if(sessionStorage.MISSAO_25 == 0 ){

        id_missao25.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_25 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_26 = 0
        color()
    }
    else if(sessionStorage.MISSAO_26 == 0 ){

        id_missao26.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_26 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_27 = 0
        color()
    }
    else if(sessionStorage.MISSAO_27 == 0 ){

        id_missao27.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_27 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_28 = 0
        color()
    }
    else if(sessionStorage.MISSAO_28 == 0 ){

        id_missao28.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_28 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_29 = 0
        color()
    }
    else if(sessionStorage.MISSAO_29 == 0 ){

        id_missao29.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_29 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_30 = 0
        color()
    }
    else if(sessionStorage.MISSAO_30 == 0 ){

        id_missao30.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_30 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_31 = 0
        color()
    }
    else if(sessionStorage.MISSAO_31 == 0 ){

        id_missao31.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_31 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_32 = 0
        color()
    }
    else if(sessionStorage.MISSAO_32 == 0 ){

        id_missao32.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_32 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_33 = 0
        color()
    }
    else if(sessionStorage.MISSAO_33 == 0 ){

        id_missao33.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_33 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_34 = 0
        color()
    }
    else if(sessionStorage.MISSAO_34 == 0 ){

        id_missao34.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_34 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_35 = 0
        color()
    }
    else if(sessionStorage.MISSAO_35 == 0 ){

        id_missao35.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_35 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_36 = 0
        color()
    }
    else if(sessionStorage.MISSAO_36 == 0 ){

        id_missao36.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_36 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_37 = 0
        color()
    }
    else if(sessionStorage.MISSAO_37 == 0 ){

        id_missao37.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_37 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_38 = 0
        color()
    }
    else if(sessionStorage.MISSAO_38 == 0 ){

        id_missao38.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_38 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_39 = 0
        color()
    }
    else if(sessionStorage.MISSAO_39 == 0 ){

        id_missao39.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_39 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_40 = 0
        color()
    }
    else if(sessionStorage.MISSAO_40 == 0 ){

        id_missao40.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_40 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_41 = 0
        color()
    }
    else if(sessionStorage.MISSAO_41 == 0 ){

        id_missao41.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_41 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_42 = 0
        color()
    }
    else if(sessionStorage.MISSAO_42 == 0 ){

        id_missao42.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_42 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_43 = 0
        color()
    }
    else if(sessionStorage.MISSAO_43 == 0 ){

        id_missao43.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_43 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_44 = 0
        color()
    }
    else if(sessionStorage.MISSAO_44 == 0 ){

        id_missao44.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_44 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_45 = 0
        color()
    }
    else if(sessionStorage.MISSAO_45 == 0 ){

        id_missao45.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_45 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_46 = 0
        color()
    }
    else if(sessionStorage.MISSAO_46 == 0 ){

        id_missao46.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_46 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_47 = 0
        color()
    }
    else if(sessionStorage.MISSAO_47 == 0 ){

        id_missao47.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_47 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_48 = 0
        color()
    }
    else if(sessionStorage.MISSAO_48 == 0 ){

        id_missao48.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_48 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_49 = 0
        color()
    }
    else if(sessionStorage.MISSAO_49 == 0 ){

        id_missao49.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_49 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_50 = 0
        color()
    }
    else if(sessionStorage.MISSAO_50 == 0 ){

        id_missao50.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_50 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_51 = 0
        color()
    }
    else if(sessionStorage.MISSAO_51 == 0 ){

        id_missao51.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_51 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_52 = 0
        color()
    }
    else if(sessionStorage.MISSAO_52 == 0 ){

        id_missao52.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_52 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_53 = 0
        color()
    }
    else if(sessionStorage.MISSAO_53 == 0 ){

        id_missao53.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_53 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_54 = 0
        color()
    }
    else if(sessionStorage.MISSAO_54 == 0 ){

        id_missao54.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_54 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_55 = 0
        color()
    }
    else if(sessionStorage.MISSAO_55 == 0 ){

        id_missao55.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_55 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_56 = 0
        color()
    }
    else if(sessionStorage.MISSAO_56 == 0 ){

        id_missao56.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_56 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_57 = 0
        color()
    }
    else if(sessionStorage.MISSAO_57 == 0 ){

        id_missao57.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_57 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_58 = 0
        color()
    }
    else if(sessionStorage.MISSAO_58 == 0 ){

        id_missao58.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_58 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_59 = 0
        color()
    }
    else if(sessionStorage.MISSAO_59 == 0 ){

        id_missao59.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_59 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_60 = 0
        color()
    }
    else if(sessionStorage.MISSAO_60 == 0 ){

        id_missao60.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_60 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_61 = 0
        color()
    }
    else if(sessionStorage.MISSAO_61 == 0 ){

        id_missao61.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_61 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_62 = 0
        color()
    }
    else if(sessionStorage.MISSAO_62 == 0 ){

        id_missao62.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_62 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_63 = 0
        color()
    }
    else if(sessionStorage.MISSAO_63 == 0 ){

        id_missao63.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_63 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_64 = 0
        color()
    }
    else if(sessionStorage.MISSAO_64 == 0 ){

        id_missao64.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_64 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_65 = 0
        color()
    }
    else if(sessionStorage.MISSAO_65 == 0 ){

        id_missao65.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_65 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_66 = 0
        color()
    }
    else if(sessionStorage.MISSAO_66 == 0 ){

        id_missao66.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_66 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_67 = 0
        color()
    }
    else if(sessionStorage.MISSAO_67 == 0 ){

        id_missao67.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_67 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_68 = 0
        color()
    }
    else if(sessionStorage.MISSAO_68 == 0 ){

        id_missao68.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_68 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_69 = 0
        color()
    }
    else if(sessionStorage.MISSAO_69 == 0 ){

        id_missao69.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_69 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_70 = 0
        color()
    }
    else if(sessionStorage.MISSAO_70 == 0 ){

        id_missao70.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_70 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_71 = 0
        color()
    }
    else if(sessionStorage.MISSAO_71 == 0 ){

        id_missao71.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_71 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_72 = 0
        color()
    }
    else if(sessionStorage.MISSAO_72 == 0 ){

        id_missao72.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_72 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_73 = 0
        color()
    }
    else if(sessionStorage.MISSAO_73 == 0 ){

        id_missao73.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_73 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_74 = 0
        color()
    }
    else if(sessionStorage.MISSAO_74 == 0 ){

        id_missao74.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_74 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_75 = 0
        color()
    }
    else if(sessionStorage.MISSAO_75 == 0 ){

        id_missao75.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_75 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_76 = 0
        color()
    }
    else if(sessionStorage.MISSAO_76 == 0 ){

        id_missao76.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_76 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_77 = 0
        color()
    }
    else if(sessionStorage.MISSAO_77 == 0 ){

        id_missao77.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_77 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_78 = 0
        color()
    }
    else if(sessionStorage.MISSAO_78 == 0 ){

        id_missao78.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_78 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_79 = 0
        color()
    }
    else if(sessionStorage.MISSAO_79 == 0 ){

        id_missao79.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_79 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_80 = 0
        color()
    }
    else if(sessionStorage.MISSAO_80 == 0 ){

        id_missao80.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_80 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_81 = 0
        color()
    }
    else if(sessionStorage.MISSAO_81 == 0 ){

        id_missao81.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_81 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_82 = 0
        color()
    }
    else if(sessionStorage.MISSAO_82 == 0 ){

        id_missao82.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_82 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_83 = 0
        color()
    }
    else if(sessionStorage.MISSAO_83 == 0 ){

        id_missao83.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_83 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_84 = 0
        color()
    }
    else if(sessionStorage.MISSAO_84 == 0 ){

        id_missao84.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_84 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_85 = 0
        color()
    }
    else if(sessionStorage.MISSAO_85 == 0 ){

        id_missao85.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_85 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_86 = 0
        color()
    }
    else if(sessionStorage.MISSAO_86 == 0 ){

        id_missao86.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_86 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_87 = 0
        color()
    }
    else if(sessionStorage.MISSAO_87 == 0 ){

        id_missao87.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_87 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_88 = 0
        color()
    }
    else if(sessionStorage.MISSAO_88 == 0 ){

        id_missao88.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_88 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_89 = 0
        color()
    }
    else if(sessionStorage.MISSAO_89 == 0 ){

        id_missao89.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_89 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_90 = 0
        color()
    }
    else if(sessionStorage.MISSAO_90 == 0 ){

        id_missao90.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_90 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_91 = 0
        color()
    }
    else if(sessionStorage.MISSAO_91 == 0 ){

        id_missao91.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_91 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_92 = 0
        color()
    }
    else if(sessionStorage.MISSAO_92 == 0 ){

        id_missao92.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_92 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_93 = 0
        color()
    }
    else if(sessionStorage.MISSAO_93 == 0 ){

        id_missao93.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_93 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_94 = 0
        color()
    }
    else if(sessionStorage.MISSAO_94 == 0 ){

        id_missao94.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_94 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_95 = 0
        color()
    }
    else if(sessionStorage.MISSAO_95 == 0 ){

        id_missao95.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_95 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_96 = 0
        color()
    }
    else if(sessionStorage.MISSAO_96 == 0 ){

        id_missao96.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_96 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_97 = 0
        color()
    }
    else if(sessionStorage.MISSAO_97 == 0 ){

        id_missao97.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_97 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_98 = 0
        color()
    }
    else if(sessionStorage.MISSAO_98 == 0 ){

        id_missao98.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_98 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_99 = 0
        color()
    }
    else if(sessionStorage.MISSAO_99 == 0 ){

        id_missao99.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_99 = 1
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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_100 = 0
        color()
    }
    else if(sessionStorage.MISSAO_100 == 0 ){

        id_missao100.style.backgroundColor = color1

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
        }).catch(function (erro) {
            console.log(erro);
        })
        sessionStorage.MISSAO_100 = 1
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

