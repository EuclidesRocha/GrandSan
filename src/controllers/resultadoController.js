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
        res.status(200).json(resposta);
     
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
        res.status(200).json(resposta);
      
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
        res.status(200).json(resposta);
       
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })

}

function  AcertosErros(req,res){
    var idUsuario = req.params.id;

    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    }else{
        resultadoModel.AcertosErros(idUsuario).then(function(resposta){
            
            res.status(200).json(resposta);

        }).catch(erro=>{

            res.status(500).json(erro.sqlMessage);
        })
    }
}

function rankDeUser(req, res){

      resultadoModel.rankDeUser().then(function(resposta){
            
            res.status(200).json(resposta);

        }).catch(erro=>{

            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
    guardarResultado,
    pegarPontos,
    listarUlitmos5Pontos,
    AcertosErros,
    rankDeUser
    
}

