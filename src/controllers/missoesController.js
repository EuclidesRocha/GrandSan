var missoesModel = require("../models/missoesModel")

function listar(req,res){

    var idUsuario = req.body.idUsuarioServer
    var missao = req.body.missaoServer
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    }

    missoesModel.listar(idUsuario,missao).then(function(resposta){
        res.json(resposta);
        res.status(200).send("INSERTS criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function cadastrarPrimeiraVez(req, res) {
    var idUsuario = req.body.fkUsuarioServer;
    var missao = req.body.missaoServer
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    }

    missoesModel.cadastrarPrimeiraVez(idUsuario, missao).then(function(resposta){
        res.json(resposta);
        res.status(200).send("INSERTS criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function atualizar(req,res){
    var idUsuario = req.body.idUsuarioServer;
    var missao = req.body.missaoServer
    var concluida = req.body.concluidaServer
    if (idUsuario == undefined) {
        res.status(400).send("Seu ID está undefined!");
    }

    missoesModel.atualizar(idUsuario, missao, concluida).then(function(resposta){
        res.json(resposta);
        res.status(200).send("update criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })

}

module.exports = {
    listar,
    cadastrarPrimeiraVez,
    atualizar
}

