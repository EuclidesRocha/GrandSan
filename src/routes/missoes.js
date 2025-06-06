var express = require("express");
var router = express.Router();


var missoesController = require("../controllers/missoesController");

router.post("/cadastrarPrimeiraVez", function (req, res) {
    missoesController.cadastrarPrimeiraVez(req, res);
});

router.post("/listar", function (req, res) {
    missoesController.listar(req, res);
});
router.put("/atualizar", function(req,res){
    missoesController.atualizar(req, res);
});

router.get("/totalFeitas/:id", function(req,res){
    missoesController.totalFeitas(req, res);
});



module.exports = router;