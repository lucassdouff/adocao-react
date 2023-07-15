package com.lucasoliveira.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Gato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imagem;

    @NotEmpty(message = "O 'Nome' deve ser informado.")
    private String nome;
    private String descricao;

    @NotNull(message = "A 'Data de Nascimento' deve ser informada.")
    @Column(name = "DATA_NASCIMENTO")
    private LocalDate dataNascimento;

    @NotEmpty(message = "O 'Sexo' deve ser informado.")
    private String sexo;

    @ManyToOne
    private Categoria categoria;

    public Gato(String imagem,
                Categoria categoria,
                String nome,
                String descricao,
                LocalDate dataNascimento,
                String sexo) {
        this.imagem = imagem;
        this.categoria = categoria;
        this.nome = nome;
        this.descricao = descricao;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
    }
}
