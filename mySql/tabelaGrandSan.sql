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
idResultado int auto_increment,
fkUsuario INT NOT NULL,
pontos int not NULL,
acertos  int not NULL,
erros int not NULL,
dtResultado datetime default current_timestamp,
  PRIMARY KEY (idResultado, fkUsuario),
  CONSTRAINT fkUserResul FOREIGN KEY (fkUsuario)
    REFERENCES usuario (idUsuario)
);

select * from resultado;

Select sum(pontos) from resultado group by fkUsuario HAVING fkUsuario = 1;
Select  tentativa, pontos from resultado where fkUsuario = 1 order by tentativa desc ;

drop table resultado;


CREATE TABLE missoes(
  idMissoes INT PRIMARY KEY NOT NULL auto_increment,
  nome varchar(45)
   ); 
   
create table StatusMissao(
idStatus int auto_increment not null,
fkMissoes int not NULL,
fkUsuario int not NULL,
concluida boolean not NULL,
constraint fkStaMis foreign key (fkMissoes) references missoes(idMissoes),
CONSTRAINT fkmisUser FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
PRIMARY KEY (idStatus,fkMissoes, fkUsuario)
);

select * from StatusMissao;

   select * from missoes;

       
         
INSERT INTO missoes (idMissoes, nome) VALUES
(1, 'No Início'),
(2, 'Big Smoke'),
(3, 'Sweet and Kendl'),
(4, 'Ryder'),
(5, 'Invasão Domiciliar'),
(6, 'Catalisador'),
(7, 'Roubando o Tio Sam'),
(8, 'Marcando território'),
(9, 'Limpando as ruas'),
(10, 'Drive-Thru'),
(11, 'Noves e AK’s'),
(12, 'Tiroteio de Veículo'),
(13, 'Garota do Sweet'),
(14, 'Cesar Vialpando'),
(15, 'Doberman'),
(16, 'Los Sepulcros'),
(17, 'Reunindo as Famílias'),
(18, 'O Sabre Verde'),
(19, 'OG Loc'),
(20, 'Cão em Fuga'),
(21, 'Do Lado Errado dos Trilhos'),
(22, 'Apenas Negócios'),
(23, 'Tirando Onda na Praia'),
(24, 'As Rimas do Madd Dogg'),
(25, 'A Gente Tem um Problema'),
(26, 'Festinha em Casa'),
(27, 'Grande Prêmio Lowrider'),
(28, 'Desejo Ardente'),
(29, 'Mercado Cinza'),
(30, 'Terra de Ninguém'),
(31, 'Colheita de Corpos'),
(32, 'Rei no Exílio'),
(33, 'Primeiro Encontro'),
(34, 'Ladrão de Caminhão'),
(35, 'Contra as Probabilidades'),
(36, 'Loja de Bebidas Local'),
(37, 'Banco de Cidade Pequena'),
(38, 'Preliminares'),
(39, 'Acasalamento'),
(40, 'Par Perfeito'),
(41, 'Wu Zi Mu'),
(42, 'Adeus Meu Amor…'),
(43, 'Você Vai Para San Fierro?'),
(44, 'Use Flores no Seu Cabelo'),
(45, 'Disque-Denúncia'),
(46, 'Desconstrução'),
(47, 'Ataque Aéreo'),
(48, 'Linhas de Suprimentos…'),
(49, 'Exército Novo'),
(50, 'Oportunidade de Foto'),
(51, 'Jizzy'),
(52, 'T-Bone Mendez'),
(53, 'Mike Toreno'),
(54, 'Batedor'),
(55, 'Galera da Mountain Cloud'),
(56, 'Ran Fa Li'),
(57, 'Isca'),
(58, 'Ataque Anfíbio'),
(59, 'A Gangue Da Nang'),
(60, 'No Rastro da Lesma'),
(61, 'Sangue-Frio'),
(62, 'Píer 69'),
(63, 'O Último Voo do Toreno'),
(64, 'Cabum'),
(65, 'Zeroing In'),
(66, 'Test Drive'),
(67, 'Customs Fast Track'),
(68, 'Puncture Wounds'),
(69, 'Aprendendo a Voar'),
(70, 'Voo Rasante'),
(71, 'Passageiro Clandestino'),
(72, 'Projeto Negro'),
(73, 'Gosma Verde'),
(74, 'Ketchup no Capô'),
(75, 'Situação Explosiva'),
(76, 'Operação de Fichinha'),
(77, 'Don Peyote'),
(78, 'Espionagem Arquitetônica'),
(79, 'A Chave para o Coração Dela'),
(80, 'Rebentando a Represa'),
(81, 'Rodas Policiais'),
(82, 'Para o Alto e Avante!'),
(83, 'Peixe no Aquário'),
(84, 'Quebrando a Banca no Caligula'),
(85, 'Um Lar nas Colinas'),
(86, 'Terapia Intensiva'),
(87, 'O Negócio da Carne'),
(88, 'Apropriação Indevida'),
(89, 'Matar ou Morrer'),
(90, 'Madd Dogg'),
(91, 'Queda Livre'),
(92, 'Bistrô de Saint Mark'),
(93, 'Pássaro Vertical'),
(94, 'De Volta ao Lar'),
(95, 'Negócio Acirrado'),
(96, 'Porrada no B Dup'),
(97, 'Groove na Veia'),
(98, 'Tumulto'),
(99, 'Los Desperados'),
(100, 'Fim da Linha');

       