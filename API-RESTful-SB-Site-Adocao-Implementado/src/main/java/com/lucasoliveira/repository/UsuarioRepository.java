package com.lucasoliveira.repository;

import com.lucasoliveira.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query("select u from Usuario u where u.email = :email and u.senha = :senha")
    Usuario login(String email, String senha);
}
