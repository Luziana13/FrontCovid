DROP DATABASE IF EXISTS covid;
CREATE DATABASE covid;

CREATE EXTENSION IF NOT EXISTS "plpgsql"

create table pessoa (
	idpessoa serial not null primary key,
	nome varchar(50),
	email varchar(50) not null,
	idade int not null,
	sexo varchar(20) not null ,
	cor varchar(20) not null,
	escolaridade varchar(45) not null,
	categoriaprof varchar(50) not null,
	renda float not null,
	sintomas int not null,
	diagnostico int not null,
	contatocom int not null
);

create table denuncia (
	idpessoa int not null,
	iddenuncia serial not null primary key,
	periodo varchar(15) not null,
	data_ varchar(20) not null,
	colegaapesentou int not null,
	vunerabilidade varchar(75) not null,
	descricaovulnerabilidade varchar(500) not null,
	latitude float not null,
	longitude float not null,
	foreign key(idpessoa) references pessoa(idpessoa)
);

create table colega (
	idcolega serial not null primary key,
	iddenuncia serial not null,
	CategoriaProfColega varchar(50),
	idadeColega varchar(3),
	sexoColega varchar(13),
	corColega varchar(15),
	foreign key (iddenuncia) references denuncia(iddenuncia)
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