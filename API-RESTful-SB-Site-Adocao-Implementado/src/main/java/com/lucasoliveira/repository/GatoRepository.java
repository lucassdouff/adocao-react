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

    @Query("select g from Gato g left join fetch g.categoria c where c.id = :id")
    List<Gato> findByCategoriaId(Long id);

    List<Gato> findByCategoriaSlug(String slug);

    @Query("select g from Gato g left join fetch g.categoria")
    List<Gato> recuperarGatosComCategoria();

    @Query(
            value = "select g from Gato g left join fetch g.categoria order by g.id",
            countQuery = "select count(g) from Gato g"
    )
    Page<Gato> recuperarGatosPaginados(Pageable pageable);
}
