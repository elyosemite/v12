drop database plussoft;

create database plussoft;
use plussoft;

create table if not exists Revenda(
	id int not null auto_increment primary key,
	codigo int not null,
	fantasia varchar(60) not null,
	cpf_cnpj varchar(20),
	fone varchar(20),
	inativo boolean not null,
	serie_Shop9 varchar(20) unique
);

create table if not exists Logista(
	id int not null auto_increment primary key,
	codigo_revenda int not null,
	fantasia varchar(60) not null,
	cpf_cnpj varchar(20),
	fone varchar(20),
	inativo boolean not null,
	serie_Shop9 varchar(20) not null,
	foreign key (codigo_revenda) references Revenda(codigo)
);

create table if not exists Cotacao_Cabecalho(
	id int not null auto_increment primary key,
	id_logista int,
	codigo_cotacao int not null,
	data_cotacao datetime not null /*DATETIME values in 'YYYY-MM-DD hh:mm:ss'*/
);

create table if not exists Cotacao_Produtos(
	id int not null auto_increment primary key,
	id_logista int,
	id_fornecedor int,
	ordem_produto int not null,
	codigo_produto varchar(20) not null,
	descricao_produto varchar(50) not null,
	quantidade varchar(10) not null,
	valor_unitario varchar(10),
	perc_ipi varchar(20),
	perc_icms varchar(20),
	obs varchar(2048)
);
