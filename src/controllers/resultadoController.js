var resultadoModel = require("../models/resultadoModel")


function guardarResultado(req, res) {

    var idUsuario = req.body.UsuarioServer;
    var pontos = req.body.pontosServer;
    var acertos = req.body.acertosServer;
    var erro = req.body.errosServer
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    }

    resultadoModel.guardarResultado(idUsuario, pontos, acertos, erro).then(function(resposta){
        res.json(resposta);
        res.status(200).send("INSERTS criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function pegarPontos(req, res) {

    var idUsuario = req.body.UsuarioServer;
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    }

    resultadoModel.pegarPontos(idUsuario).then(function(resposta){
        res.json(resposta);
        res.status(200).send("INSERTS criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarUlitmos5Pontos(req,res){

    var idUsuario = req.body.UsuarioServer;
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    }

    resultadoModel.listarUlitmos5Pontos(idUsuario).then(function(resposta){
        res.json(resposta);
        res.status(200).send("INSERTS criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })

}

module.exports = {
    guardarResultado,
    pegarPontos,
    listarUlitmos5Pontos
    
}

