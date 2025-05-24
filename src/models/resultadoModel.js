
var database = require("../database/config");



function guardarResultado (idUsuario, pontos, acertos, erros) {

    
        
    var instrucao = `
        INSERT INTO resultado (fkUsuario, pontos, acertos, erros) VALUES ( '${idUsuario}', ${pontos}, ${acertos}, ${erros} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function pegarPontos (idUsuario){

    var instrucao = `Select sum(pontos) as Pontos from resultado group by fkUsuario HAVING fkUsuario = ${idUsuario}` 
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}


module.exports = {
    
    guardarResultado,
    pegarPontos
   
};
