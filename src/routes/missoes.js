var express = require("express");
var router = express.Router();


var missoesController = require("../controllers/missoesController");

router.post("/cadastrarPrimeiraVez", function (req, res) {
    missoesController.cadastrarPrimeiraVez(req, res);
});

router.get("/listar", function (req, res) {
    missoesController.listar(req, res);
});



module.exports = router;