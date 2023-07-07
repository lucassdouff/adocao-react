package com.lucasoliveira.service;

import com.lucasoliveira.exception.EntidadeNaoEncontradaException;
import com.lucasoliveira.model.Gato;
import com.lucasoliveira.repository.CategoriaRepository;
import com.lucasoliveira.repository.GatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GatoService {

    @Autowired
    private GatoRepository gatoRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;
    public List<Gato> recuperarGatos() {
        return gatoRepository.recuperarGatosComCategoria();
    }

    public Gato cadastrarGato(Gato gato) {
        return gatoRepository.save(gato);
    }

    public Gato recuperarGatoPorId(Long id) {
        return gatoRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Gato número " + id + " não encontrado."));
    }

    public Gato atualizaGato(Gato gato) {
        Gato umGato = recuperarGatoPorId(gato.getId());
        if(!(gato.getCategoria().getId().equals(umGato.getCategoria().getId()))) {
            categoriaRepository.findById(gato.getCategoria().getId())
                    .orElseThrow(() -> new EntidadeNaoEncontradaException(
                            "Categoria número " + gato.getCategoria().getId() + " não encontrada."));
        }
        return gatoRepository.save(gato);
    }

    public void removerGato(Long id) {
        recuperarGatoPorId(id);
        gatoRepository.deleteById(id);
    }

    public List<Gato> recuperarGatosPorCategoria(Long id) {
        return gatoRepository.findByCategoriaId(id);
    }

    public List<Gato> recuperarGatosPorSlugDaCategoria(String slug) {
        return gatoRepository.findByCategoriaSlug(slug);
    }

    public Page<Gato> recuperarGatosPaginados(Pageable pageable) {
        return gatoRepository.recuperarGatosPaginados(pageable);
    }
}
