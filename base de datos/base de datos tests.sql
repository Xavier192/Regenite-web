DROP DATABASE IF EXISTS tests;
CREATE DATABASE tests;

/*************CREATE TABLES***************/

CREATE TABLE test ( titulo varchar(30), descriptcion varchar(100), urlImagen varchar(50), id INT AUTO_INCREMENT primary key );

CREATE TABLE pregunta( titulo varchar(50), id INT AUTO_INCREMENT primary key, idTest INT, tipo ENUM('radio', 'checkbox'), respuesta varchar(10), foreign key (idTest) references test(id) );

CREATE TABLE respuesta( respuesta varchar(50), id INT AUTO_INCREMENT primary key, idPregunta INT, foreign key (idPregunta) references pregunta(id));


/**************INSERT DATA INTO TEST TABLE**************/

INSERT INTO test VALUES ( "Genoma", "lorem ipsum dolor si amet Lorem ipsum dolor sit amet", "./img/test-genoma.png", 0 );

INSERT INTO test VALUES ( "Cell function", "lorem ipsum dolor si amet Lorem ipsum dolor sit amet", "./img/test-cell-function.png", 0 );

INSERT INTO test VALUES ( "Regenerative medicine", "lorem ipsum dolor si amet Lorem ipsum dolor sit amet", "./img/test-regenerative.png", 0 );

INSERT INTO test VALUES ( "Organ function", "lorem ipsum dolor si amet Lorem ipsum dolor sit amet", "./img/test-organ.png", 0 );

INSERT INTO test VALUES ( "Virus", "lorem ipsum dolor si amet Lorem ipsum dolor sit amet", "./img/test-virus.png", 0 );

INSERT INTO test VALUES ( "Bacteria", "lorem ipsum dolor si amet Lorem ipsum dolor sit amet", "./img/test-bacteria.png", 0 );

/*************INSERT DATA INTO Question TABLE***************/

INSERT INTO pregunta VALUES( "What is a genome?", 0, 1, "radio" );

INSERT INTO pregunta VALUES( "What is DNA sequencing?", 0, 1, "radio" );

INSERT INTO pregunta VALUES( "Who owns the human genome?", 0, 1, "radio" );

INSERT INTO pregunta VALUES( "How much did it cost to sequence the genome?", 0, 1, "radio" );

INSERT INTO pregunta VALUES( "What are the components of DNA?", 0, 1, "checkbox" );

INSERT INTO pregunta VALUES( "What is a chromosome?", 0, 1, "radio" );

INSERT INTO pregunta VALUES( "What is a gene?", 0, 1, "radio");

INSERT INTO pregunta VALUES( "What is the composition of a chromosome?", 0, 1, "checkbox");

INSERT INTO pregunta VALUES( "In which year the human genome was sequenced?", 0, 1, "radio");

INSERT INTO pregunta VALUES( "Which shape has a chromosome?", 0, 1, "radio");

/**************INSERT DATA INTO Answer TABLE*****************/

INSERT INTO respuesta VALUES( "A genome is an organism's two and three chromosomes", 0, 1);
INSERT INTO respuesta VALUES( "A genome is an organism's complete set of deoxyribonucleic acid (DNA)", 0, 1);
INSERT INTO respuesta VALUES( "A genome is a complete set of human genes", 0, 1);

INSERT INTO respuesta VALUES( "Determining the exact order of the base pairs in a segment of DNA", 0, 2);
INSERT INTO respuesta VALUES( "Determining the content of DNA", 0, 2);
INSERT INTO respuesta VALUES( "Finding new genes that we didn't know about", 0, 2);

INSERT INTO respuesta VALUES( "Microsoft", 0, 3);
INSERT INTO respuesta VALUES( "Google", 0, 3);
INSERT INTO respuesta VALUES( "Human Genome Project", 0, 3);

INSERT INTO respuesta VALUES( "150000000$", 0, 4);
INSERT INTO respuesta VALUES( "27000000000$", 0, 4);
INSERT INTO respuesta VALUES( "Human Genome Project", 0, 4);
INSERT INTO respuesta VALUES( "2$", 0, 4);

INSERT INTO respuesta VALUES( "Adenine", 0, 5);
INSERT INTO respuesta VALUES( "Thymine", 0, 5);
INSERT INTO respuesta VALUES( "Guanine", 0, 5);
INSERT INTO respuesta VALUES( "Adenosine", 0, 5);
INSERT INTO respuesta VALUES( "Cytosine", 0, 5);

INSERT INTO respuesta VALUES( "A skin cell type", 0, 6);
INSERT INTO respuesta VALUES( "It's a thread-like structure located inside the nucleus of animal and plant cell", 0, 6);
INSERT INTO respuesta VALUES( "It's a type of neuron", 0, 6);

INSERT INTO respuesta VALUES( "A skin cell type", 0, 7);
INSERT INTO respuesta VALUES( "It's a thread-like structure located inside the nucleus of animal and plant cell", 0, 7);
INSERT INTO respuesta VALUES( "It's a type of neuron", 0, 7);
























