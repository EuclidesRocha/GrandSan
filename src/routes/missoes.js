var express = require("express");
var router = express.Router();


var missoesController = require("../controllers/missoesController");

router.post("/cadastrar", function (req, res) {
    missoesController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    missoesController.listar(req, res);
});



module.exports = router;