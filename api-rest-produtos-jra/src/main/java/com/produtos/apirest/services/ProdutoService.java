package com.produtos.apirest.services;

import com.produtos.apirest.models.Produto;
import com.produtos.apirest.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;
@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;
    public Produto buscarProduto(Long id){
        Produto produto = produtoRepository.findById(id).orElse(null);
        if(Objects.isNull(produto)){
            throw new RuntimeException("Erro!!");
        }
        return  produto;
    }

    public void removerProduto(Long produtoId) {
        buscarProduto(produtoId);
        produtoRepository.deleteById(produtoId);

    }
}
