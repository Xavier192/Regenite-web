CREATE DATABASE IF NOT EXISTS tests;
use tests;

CREATE TABLE IF NOT EXISTS test (
titulo varchar(30),
descriptcion varchar(100),
id varchar(5) primary key
);

CREATE TABLE IF NOT EXISTS pregunta(
titulo varchar(50),
id varchar(5) primary key,
idTest varchar(5),
foreign key idTest references test(id)
);

CREATE TABLE IF NOT EXISTS respuesta(
respuesta varchar(50),
id varchar(5) primary key,
idPregunta varchar(5),
foreign key (idPregunta) references pregunta(id)
);

