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
				"gato1.jpg",
				siames,
				"Abacate",
				"Um gato fofinho",
				LocalDate.of(2020, 4, 26),
				"Macho");
		gatoRepository.save(gato);

		gato = new Gato(
				"gato2.jpg",
				brasileiro,
				"Abobrinha",
				"Um gato mais fofinho",
				LocalDate.of(2022, 5, 22),
				"Fêmea");
		gatoRepository.save(gato);

		gato = new Gato(
				"gato3.jpg",
				persa,
				"Pandora",
				"Um gato muito mais fofinho",
				LocalDate.of(2019, 5, 22),
				"Fêmea");
		gatoRepository.save(gato);

		gato = new Gato(
				"gato4.jpg",
				brasileiro,
				"Kion",
				"Um gato fofinho pra caralho",
				LocalDate.of(2020, 2, 22),
				"Macho");
		gatoRepository.save(gato);

		gato = new Gato(
				"gato5.jpg",
				siames,
				"Marie",
				"Porra que gato fofinho",
				LocalDate.of(2021, 12, 22),
				"Fêmea");
		gatoRepository.save(gato);

		gato = new Gato(
				"gato6.jpg",
				siames,
				"Mochi",
				"Muito fofo mesmo que gato fofo",
				LocalDate.of(2021, 12, 22),
				"Fêmea");
		gatoRepository.save(gato);

	}
}
