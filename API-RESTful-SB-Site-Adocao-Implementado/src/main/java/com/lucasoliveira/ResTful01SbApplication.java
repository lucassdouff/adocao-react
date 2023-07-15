package com.lucasoliveira;

import com.lucasoliveira.model.Categoria;
import com.lucasoliveira.model.Gato;
import com.lucasoliveira.repository.CategoriaRepository;
import com.lucasoliveira.repository.GatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;

@SpringBootApplication
public class ResTful01SbApplication implements CommandLineRunner {

	@Autowired
	private GatoRepository gatoRepository;

	@Autowired
	private CategoriaRepository categoriaRepository;

	public static void main(String[] args) {
		SpringApplication.run(ResTful01SbApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Categoria siames = new Categoria("Siamês", "siames");
		categoriaRepository.save(siames);
		Categoria persa = new Categoria("Persa", "persa");
		categoriaRepository.save(persa);
		Categoria brasileiro = new Categoria("Pelo Curto Brasileiro", "brasileiro");
		categoriaRepository.save(brasileiro);

		Gato gato = new Gato(
				"gato3.jpg",
				siames,
				"Abacate",
				"1 unidade aprox. 750g",
				LocalDate.of(2020, 4, 26),
				"Macho");
		gatoRepository.save(gato);

		gato = new Gato(
				"gato2.jpeg",
				brasileiro,
				"Abobrinha",
				"1 unidade aprox. 250g",
				LocalDate.of(2022, 5, 22),
				"Fêmea");
		gatoRepository.save(gato);

		gato = new Gato(
				"gato1.jpg",
				persa,
				"Pandora",
				"1 unidade aprox. 250g",
				LocalDate.of(2019, 5, 22),
				"Fêmea");
		gatoRepository.save(gato);

		gato = new Gato(
				"gato3.jpg",
				brasileiro,
				"Kion",
				"1 unidade aprox. 250g",
				LocalDate.of(2020, 2, 22),
				"Macho");
		gatoRepository.save(gato);

		gato = new Gato(
				"gato2.jpeg",
				siames,
				"Marie",
				"1 unidade aprox. 250g",
				LocalDate.of(2021, 12, 22),
				"Fêmea");
		gatoRepository.save(gato);

		gato = new Gato(
				"gato1.jpg",
				siames,
				"Mochi",
				"1 unidade aprox. 250g",
				LocalDate.of(2021, 12, 22),
				"Fêmea");
		gatoRepository.save(gato);

	}
}
