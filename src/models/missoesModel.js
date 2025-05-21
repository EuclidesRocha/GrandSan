
var database = require("../database/config");

function listar(idUsuario, missao) {
    var instrucao = `
        SELECT numero, concluida FROM missoes where fkUsuario = ${idUsuario} and numero = ${missao};
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




function atualizar(idUsuario, missao, concluida){
    var instrucao = `
        UPDATE missoes SET concluida = ${concluida} where numero = ${missao} and fkUsuario =${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarPrimeiraVez,
    listar,
    atualizar
};

