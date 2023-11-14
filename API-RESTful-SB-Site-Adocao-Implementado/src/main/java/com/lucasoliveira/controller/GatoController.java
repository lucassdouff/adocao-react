package com.lucasoliveira.controller;

import com.lucasoliveira.model.Gato;
import com.lucasoliveira.service.GatoService;
import com.lucasoliveira.util.GatosPaginados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("gatos")
public class GatoController {

    @Autowired
    private GatoService gatoService;

    @GetMapping
    public List<Gato> recuperarGatos() {
        return gatoService.recuperarGatos();
    }

    @PostMapping
    public Gato cadastrarGato(@RequestBody Gato gato) {
        return gatoService.cadastrarGato(gato);
    }
    // http://localhost:8080/produtos/1

    @GetMapping("{idGato}")       // http://localhost:8080/gatos/1
    public Gato recuperarGatoPorId(@PathVariable("idGato") Long id) {
        return gatoService.recuperarGatoPorId(id);
    }

    @PutMapping                  // http://localhost:8080/gatos
    public Gato atualizarGato(@RequestBody Gato gato) {
        return gatoService.atualizaGato(gato);
    }

                                   // http://localhost:8080/gatos/1
    @DeleteMapping("{idGato}")
    public void removerGato(@PathVariable("idGato") Long id) {
        gatoService.removerGato(id);
    }

    @GetMapping("categoria/{slugCategoria}")         // http://localhost:8080/gatos/categoria/?
    public List<Gato> recuperarGatosPorSlugDaCategoria(@PathVariable("slugCategoria") String slug) {
        return gatoService.recuperarGatosPorSlugDaCategoria(slug);
    }

    @GetMapping("categoria")   // http://localhost:8080/gatos/categoria?idCategoria=1
    public List<Gato> recuperarGatosPorCategoriaV2(
            @RequestParam("idCategoria") Long id,
            @RequestParam(name="nome", defaultValue = "") String nome

    ) {
        if (id == 0)
            return gatoService.recuperarGatos();
        return gatoService.recuperarGatosPorCategoria(id, nome);
    }

    @GetMapping("recentes")
    public List<Gato> recuperarGatosRecentes() { return gatoService.recuperarGatosRecentes(); }

    @GetMapping("adote")
    public Gato recuperarGatoAleatorio() { return gatoService.recuperarGatoAleatorio(); }

    @GetMapping("paginacao")   // http://localhost:8080/gatos/paginacao?pagina=0&tamanho=5
    public GatosPaginados recuperarGatosPaginados(
            @RequestParam(name="pagina", defaultValue = "0") int pagina,
            @RequestParam(name="tamanho", defaultValue = "3") int tamanho,
            @RequestParam(name="nome", defaultValue = "") String nome
    ) {
        Pageable pageable = PageRequest.of(pagina, tamanho);
        Page<Gato> paginaDeGato = gatoService.recuperarGatosPaginados(pageable, nome);
        return new GatosPaginados(
                paginaDeGato.getTotalElements(),
                paginaDeGato.getTotalPages(),
                paginaDeGato.getNumber(),
                paginaDeGato.getContent());
    }
}
