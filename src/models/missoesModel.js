var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM carro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarPrimeiraVez(idUsuario, missao	) {

    
        
    var instrucao = `
        INSERT INTO missoes (numero, concluida, fkUsuario) VALUES ( ${missao}, 0,'${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

module.exports = {
    cadastrarPrimeiraVez,
    listar
};

