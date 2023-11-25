package com.lucasoliveira.service;

import com.lucasoliveira.model.Gato;
import com.lucasoliveira.model.Usuario;
import com.lucasoliveira.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario cadastrarUsuario(Usuario usuario) {
        System.out.println(usuario);
        return usuarioRepository.save(usuario);
    }

    public Usuario login(String email, String senha) {
        return usuarioRepository.login(email,senha);
    }
}
