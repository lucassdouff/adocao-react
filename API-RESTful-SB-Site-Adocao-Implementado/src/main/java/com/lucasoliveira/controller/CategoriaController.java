package com.lucasoliveira.controller;

import com.lucasoliveira.model.Categoria;
import com.lucasoliveira.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("categorias")    // http://localhost:8080/categorias
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public List<Categoria> recuperarCategorias() {
        return categoriaService.recuperarCategorias();
    }

    @GetMapping("{idCategoria}")         // http://localhost:8080/categorias/1
    public Categoria recuperarCategoriaPorId(@PathVariable("idCategoria") Long id) {
        return categoriaService.recuperarCategoriaPorId(id);
    }
}
