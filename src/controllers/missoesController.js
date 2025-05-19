var missoesModel = require("../models/missoesModel")

function listar(req,res){
    missoesModel.listar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage)
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

module.exports = {
    listar,
    cadastrarPrimeiraVez
}

