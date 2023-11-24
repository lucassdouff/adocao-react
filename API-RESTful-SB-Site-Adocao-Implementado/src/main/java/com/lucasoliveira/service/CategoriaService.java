package com.lucasoliveira.service;

import com.lucasoliveira.exception.EntidadeNaoEncontradaException;
import com.lucasoliveira.model.Categoria;
import com.lucasoliveira.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;
    public Categoria recuperarCategoriaPorId(Long id) {
        return categoriaRepository.findById(id)
                .orElseThrow(()-> new EntidadeNaoEncontradaException(
                        "Categoria número " + id + " não encontrada."));
    }

    public List<Categoria> recuperarCategorias() {
        return categoriaRepository.findAll(Sort.by("id"));
    }
}
