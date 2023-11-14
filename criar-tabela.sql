USE banco;

CREATE TABLE gatos(
	id BIGINT auto_increment primary key,
    nome text,
    idade int,
    sexo text,
    descricao text,
    url text
);