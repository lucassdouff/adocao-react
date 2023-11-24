package com.lucasoliveira.repository;

import com.lucasoliveira.model.Gato;
import jakarta.persistence.LockModeType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface GatoRepository extends JpaRepository<Gato, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("select g from Gato g where g.id = :id")
    Optional<Gato> recuperarGatoPorIdComLock(@Param("id") Long id);

    @Query("select g from Gato g left join fetch g.categoria c where c.id = :id and g.nome like %:nome% order by g.id desc")
    List<Gato> findByCategoriaId(Long id, String nome);

    List<Gato> findByCategoriaSlug(String slug);

    @Query("select g from Gato g left join fetch g.categoria")
    List<Gato> recuperarGatosComCategoria();

    @Query("select g from Gato g order by rand() limit 1")
    Gato recuperarGatoAleatorio();

    @Query(
            value = "select g from Gato g left join fetch g.categoria c where g.nome like %:nome% order by g.id desc",
            countQuery = "select count(g) from Gato g where g.nome like %:nome%"
    )
    Page<Gato> recuperarGatosPaginados(Pageable pageable, String nome);

    @Query("select g from Gato g order by g.id desc limit 6")
    List<Gato> recuperarGatosRecentes();
}
