
var database = require("../database/config");



function guardarResultado (idUsuario, pontos, acertos, erros) {

    
        
    var instrucao = `
        INSERT INTO resultado (fkUsuario, pontos, acertos, erros) VALUES ( ${idUsuario}, ${pontos}, ${acertos}, ${erros} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function pegarPontos (idUsuario){

    var instrucao = `Select sum(pontos) as Pontos from resultado group by fkUsuario HAVING fkUsuario = ${idUsuario}` 
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function listarUlitmos5Pontos(idUsuario){

var instrucao = `Select  idResultado, pontos from resultado where fkUsuario = ${idUsuario} order by idResultado desc ;` 
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function AcertosErros(idUsuario){
    var instrucao = `select idResultado, acertos, erros, (select count(idResultado) from resultado where fkUsuario = ${idUsuario}) as qtdPartidas from resultado where fkUsuario = ${idUsuario} order by idResultado desc limit 5;` 
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    
    guardarResultado,
    pegarPontos,
    listarUlitmos5Pontos,
    AcertosErros
   
};
