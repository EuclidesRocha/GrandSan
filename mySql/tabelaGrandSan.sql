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

select * from usuario;


CREATE TABLE quiz (
  idQuiz INT PRIMARY KEY auto_increment NOT NULL,
  pergunta VARCHAR(500) NOT NULL,
  resposta VARCHAR(150) NOT NULL,
  errada1 VARCHAR(150) NOT NULL,
  errada2 VARCHAR(150) NOT NULL,
  errada3 VARCHAR(150) NOT NULL,
  spoiler boolean
);
drop table quiz;

insert into quiz (pergunta, resposta, errada1, errada2, errada3, spoiler) values
('Qual a empresa desenvolvedora do Grand Theft Auto: San Andreas?','Rockstar Games','2k Games','Ubisoft','Sony', 0),
('Qual desses não dublou um personagem em Grand Theft Auto: San Andreas.','Ray Liotta','Samuel Jackson','Ice-T','James Woods', 0),
('Carl Johnson, é o protagonista de Grand Theft Auto. Porém, ele voltou de uma cidade após um acontecimento. Qual é essa Cidade?','Liberty City','San Fierro','Las Venturas','Vice City.', 0),
('Qual foi o principal motivo de Carl Johnson voltar a seu antigo bairro?','Ir para o funeral de sua mãe','Estava fugindo da Polícia estão foi para a sua antiga gangue','Estava visitando seu antigo bairro, mas viu que sua gangue precisava de ajuda e ficou','Seu amigo Big Smoke morreu e ele foi para vingar seu amigo', 0),
('GTA foi é uma das franquias mais conhecidas do mundo dos jogos. E teve algumas sequências antes de seu grande sucesso Grand Theft Auto: San Andreas. Qual a data de lançamento de Grand Theft Auto: San Andreas?','Outubro de 2004','Abril de 2006','Outubro de 2001','Setembro de 2013', 0),
('Qual as três principais cidades do Estado de San Andreas?','Las Venturas, San Fierro e Los Santos','Liberty City, Vice City e Los Santos','Scanton, Liberty City e Las Ventura','Vice City, Las Venturas e Leônidas', 0),
('Ao decorrer do jogo temos muitas reviravolta, a principal é que tem 2 traidores em sua gangue, que secretamente é da gangue rival, os Ballas. Quem são eles?','Big Smoke e Rider','Tempenny e Sweet','Sweet e Claude','Pulaski e César', 1),
('Para contar ainda mais de sua história o GTA San Andreas tem um vídeo que conta mais sobre os momentos antes e fala da morte da mãe de CJ. E existe um tal besouro verde, que é um carro dos assassinos que mataram a mãe de CJ. Porém, a mãe dele não era o foco do assassinato. Quem era?','Sweet','Cesar','Carl Johnson','Big Smoke', 1),
('No jogo existe um personagem amigo de CJ que é cego. Porém, por um bom tempo Cj não tinha percebido, e até tem uma cena onde Cj perde em uma partida de videogame para ele. Quem é esse personagem?','Woozie','Ryder','Big Smoke','Claude', 1),
('Claude não foi apenas o único personagem a aparecer de novo na franquia GTA, e mais especificamente no GTA: San Andreas, porém, desta vez era um antagonista de uma franquia antecessora. Quem foi o outro personagem?','Catalina','Ryder','Johnny Klebitz','Tommy Vercetti', 1),
('Qual protagonista de uma Franquia principal antecessor aparece em Grand Theft Auto: San Andreas?','Claude','Michael de Santa','Niko Belic','Tommy Vercetti', 1),
('O Jogo GTA: San Andreas tem um grande mapa em relação aos seus antecessores e com isso tornar o jogo mais divertido de sair por aí e andar pelas cidades. Porém, a Rockstar foi ambiciosa, colocando uma missão onde ele volta para a cidade na qual Cj estava antes de voltar para Los Santos. Qual é esse cidade?','Liberty City','Las Venturas ','San Fierro','Los Santos', 1),
('Ao decorrer do jogo vemos que Big Smoke protagonissa uma cena com o seu discurso. O que ele disse?','"Eu quero dois Número 9, um Número 9 grande, um Número 6 com molho extra, um Número 7, dois Número 45, um com queijo, e um refrigerante grande."',' "Cj, cuide da minha família. Esse vida de gangue é perigosa. E não quero que eles sofram por escolhas minhas."','"Eu só quero paz. O ressentimento corrói e eu odeio isso."','"Homens realmente grandes não nascem grandes, tornam-se grandes."', 1),
('Por ser um jogo conhecido GTA moveu bastante a comunidade, principalmente por causa de suas lendas que a comunidade fazia em volta do jogo. Anos depois essa lenda foi referênciada em uma conquista no remaster. Qual é essa lenda?','Pé grande','Cj existiu e é um dos maiores criminoso dos Estados Unidos','GTA se passa em um plano espiritual','Big Smoke é irmão de Cj', 1);

select * from quiz where spoiler = true;

CREATE TABLE  resultado(
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
  secundaria boolean not NULL,
  principal boolean  not NULL,
  concluida boolean not NULL,
  fkUsuario INT NOT NULL,
  PRIMARY KEY ( idMissoes, fkUsuario),
  CONSTRAINT fkmisUser
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario (idUsuario)
   ); 
