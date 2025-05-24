create database GrandSan;

USE GrandSan;

drop database grandsan;

drop table usuario;

CREATE TABLE usuario(
  idUsuario INT primary key auto_increment NOT NULL,
  nome VARCHAR(45) not null,
  email VARCHAR(45) Not null unique,
  senha VARCHAR(45) Not null ,
  gangue INT not null ,
  cidadePrefe INT not null
  
);
select * from usuario;


CREATE TABLE  resultado(
idResultado int not null auto_increment,
fkUsuario INT NOT NULL,
pontos int not NULL,
acertos  int not NULL,
erros int not NULL,
  PRIMARY KEY (idResultado, fkUsuario),
  CONSTRAINT fkUserResul FOREIGN KEY (fkUsuario)
    REFERENCES usuario (idUsuario)
);

drop table resultado;


CREATE TABLE missoes(
  idMissoes INT PRIMARY KEY NOT NULL auto_increment,
  numero Int,
  concluida boolean not NULL,
  fkUsuario INT,
  CONSTRAINT fkmisUser
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario (idUsuario)
   ); 
   
   
   select * from missoes;
   