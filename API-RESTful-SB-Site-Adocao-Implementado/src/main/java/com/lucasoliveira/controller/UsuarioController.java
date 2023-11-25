package com.lucasoliveira.controller;

import com.lucasoliveira.model.Categoria;
import com.lucasoliveira.model.Gato;
import com.lucasoliveira.model.Usuario;
import com.lucasoliveira.service.CategoriaService;
import com.lucasoliveira.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public Usuario cadastrarUsuario(@RequestBody Usuario usuario) {
        return usuarioService.cadastrarUsuario(usuario);
    }

    @GetMapping("login")   // http://localhost:8080/gatos/categoria?idCategoria=1
    public Usuario login(
            @RequestParam("email") String email,
            @RequestParam("senha") String senha

    ) {
        return  usuarioService.login(email,senha);
    }
}
