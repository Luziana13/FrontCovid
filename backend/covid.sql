DROP DATABASE IF EXISTS covid;
CREATE DATABASE covid;

CREATE EXTENSION IF NOT EXISTS "plpgsql"

create table pessoa (
	idpessoa serial not null primary key,
	nome varchar(50),
	email varchar(50) ,
	idade int ,
	sexo varchar(20) ,
	cor varchar(20),
	escolaridade varchar(45) ,
	categoriaprof varchar(50) ,
	renda float ,
	sintomas int ,
	diagnostico int,
	contatocom int
);

create table denuncia (
	idpessoa int ,
	iddenuncia serial not null primary key,
	periodo varchar(15) ,
	data_ varchar(20) ,
	colegaapesentou int ,
	vunerabilidade varchar(75) ,
	descricaovulnerabilidade varchar(500) ,
	latitude float ,
	longitude float ,
	foreign key(idpessoa) references pessoa(idpessoa)
);


create table resposta(
	idresposta serial not null primary key,
	nome varchar(50),
	email varchar(30),
	telefone varchar(20),
	cargo varchar(50),
	cpf varchar (18),
	cnes_cnpj varchar(30),
	iddenuncia int,
	foreign key (iddenuncia) references denuncia(iddenuncia)
);