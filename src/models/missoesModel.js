
var database = require("../database/config");

function listar(idUsuario, missao) {
    var instrucao = `
        SELECT fkMissoes, concluida FROM StatusMissao where fkUsuario = ${idUsuario} and fkMissoes = ${missao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarPrimeiraVez(idUsuario, missao	) {

    
        
    var instrucao = `
        INSERT INTO StatusMissao (fkMissoes, fkUsuario, concluida ) VALUES ( ${missao},'${idUsuario}', 0);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}




function atualizar(idUsuario, missao, concluida){
    var instrucao = `
        UPDATE StatusMissao SET concluida = ${concluida} where fkMissoes= ${missao} and fkUsuario =${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarPrimeiraVez,
    listar,
    atualizar
};

