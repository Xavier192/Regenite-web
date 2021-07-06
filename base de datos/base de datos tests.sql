use tests;


DROP TABLE IF EXISTS respuesta;
DROP TABLE IF EXISTS pregunta;
DROP TABLE IF EXISTS test;



CREATE DATABASE IF NOT EXISTS tests;



CREATE TABLE IF NOT EXISTS test (
titulo varchar(30),
descriptcion varchar(100),
urlImagen varchar(50),
id varchar(5) primary key
);

CREATE TABLE IF NOT EXISTS pregunta(
titulo varchar(50),
id varchar(5) primary key,
idTest varchar(5),
tipo ENUM('radio','checkbox'),
foreign key (idTest) references test(id)
);

CREATE TABLE IF NOT EXISTS respuesta(
respuesta varchar(50),
id varchar(5) primary key,
idPregunta varchar(5),
foreign key (idPregunta) references pregunta(id)
);

INSERT INTO test VALUES (
"Genoma",
"lorem ipsum dolor si amet Lorem ipsum dolor sit amet",
"./img/test-genoma.png",
"t1"
);

INSERT INTO test VALUES (
"Cell function",
"lorem ipsum dolor si amet Lorem ipsum dolor sit amet",
"./img/test-cell-function.png",
"t2"
);

INSERT INTO test VALUES (
"Regenerative medicine",
"lorem ipsum dolor si amet Lorem ipsum dolor sit amet",
"./img/test-regenerative.png",
"t3"
);

INSERT INTO test VALUES (
"Organ function",
"lorem ipsum dolor si amet Lorem ipsum dolor sit amet",
"./img/test-organ.png",
"t4"
);

INSERT INTO test VALUES (
"Virus",
"lorem ipsum dolor si amet Lorem ipsum dolor sit amet",
"./img/test-virus.png",
"t5"
);

INSERT INTO test VALUES (
"Bacteria",
"lorem ipsum dolor si amet Lorem ipsum dolor sit amet",
"./img/test-bacteria.png",
"t6"
);

INSERT INTO pregunta VALUES(

);


