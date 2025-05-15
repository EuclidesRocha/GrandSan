create database GrandSan;

USE GrandSan;

CREATE TABLE usuario(
  idUsuario INT primary key auto_increment NOT NULL,
  nome VARCHAR(45) not null,
  email VARCHAR(45) Not null,
  senha VARCHAR(45) Not null ,
  gangue INT not null ,
  cidadaPrefe INT not null
  
);

select * from usuario;


CREATE TABLE Quiz (
  idQuiz INT PRIMARY KEY auto_increment NOT NULL,
  pergunta VARCHAR(300) NOT NULL,
  resposta VARCHAR(45) NOT NULL,
  errada1 VARCHAR(45) NOT NULL,
  errada2 VARCHAR(45) NOT NULL,
  errada3 VARCHAR(45) NOT NULL 
);



CREATE TABLE  Resultado(
  fkUsuario INT NOT NULL,
  fkQuiz INT NOT NULL,
  pontos int not NULL,
  acertos  int not NULL,
  erros int not NULL,
  PRIMARY KEY (fkUsuario, fkQuiz),
  CONSTRAINT fkUserResul FOREIGN KEY (fkUsuario)
    REFERENCES usuario (idUsuario),
  CONSTRAINT fkResulQuiz FOREIGN KEY (fkQuiz)
    REFERENCES Quiz(idQuiz)
);


CREATE TABLE missoes(
  idMissoes INT NOT NULL auto_increment,
  localDaMissao VARCHAR(45) not NULL,
  secundaria TINYINT not NULL,
  principal TINYINT  not NULL,
  concluida TINYINT not NULL,
  fkUsuario INT NOT NULL,
  PRIMARY KEY ( idMissoes, fkUsuario),
  CONSTRAINT fkmisUser
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario (idUsuario)
   ); 



