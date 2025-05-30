var express = require("express");
var router = express.Router();


var resultadoController = require("../controllers/resultadoController");

router.post("/guardarResultado", function (req, res) {
    resultadoController.guardarResultado(req, res);
});

router.get("/AcertosErros/:id", function (req, res) {
    resultadoController.AcertosErros(req, res);
});
router.post("/pegarPontos", function (req, res){
    resultadoController.pegarPontos(req, res);

});

router.post("/listarUlitmos5Pontos", function(req,res){

    resultadoController.listarUlitmos5Pontos(req, res);
})



module.exports = router;