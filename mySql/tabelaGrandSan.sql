create database GrandSan;

USE GrandSan;

drop table usuario;

CREATE TABLE usuario(
  idUsuario INT primary key auto_increment NOT NULL,
  nome VARCHAR(45) not null,
  email VARCHAR(45) Not null,
  senha VARCHAR(45) Not null ,
  gangue INT not null ,
  cidadePrefe INT not null
  
);


CREATE TABLE  resultado(
idResultado int not null,
fkUsuario INT NOT NULL,
pontos int not NULL,
acertos  int not NULL,
erros int not NULL,
  PRIMARY KEY (fkUsuario, idResultado),
  CONSTRAINT fkUserResul FOREIGN KEY (fkUsuario)
    REFERENCES usuario (idUsuario)
);


CREATE TABLE missoes(
  idMissoes INT PRIMARY KEY NOT NULL auto_increment,
  concluida boolean not NULL,
  fkUsuario INT,
  CONSTRAINT fkmisUser
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario (idUsuario)
   ); 
   
   