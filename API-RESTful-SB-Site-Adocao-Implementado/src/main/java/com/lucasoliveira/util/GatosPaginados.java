package com.lucasoliveira.util;

import com.lucasoliveira.model.Gato;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@AllArgsConstructor
@Getter
@ToString
public class GatosPaginados {
    private long totalDeGatos;
    private int totalDePaginas;
    private int paginaCorrente;
    private List<Gato> gatos;
}
