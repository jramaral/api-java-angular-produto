package com.produtos.apirest.resource;

import com.produtos.apirest.models.Produto;
import com.produtos.apirest.repository.ProdutoRepository;
import com.produtos.apirest.services.ProdutoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.hibernate.validator.constraints.pl.REGON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@Api(value = "API REST Produtos")
@CrossOrigin(origins = "*")
public class ProdutoResource {

    @Autowired
    ProdutoRepository produtoRepository;

    /*Coloquei aqui só para demonstrar que poderia ser feito separando a responsabilidade em uuma outra classe */
    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/produtos")
    @ApiOperation(value = "Retorna uma lista de produtos")
    public List<Produto> listaProduto(){
        return produtoRepository.findAll();
    }

    @GetMapping("/produtos/{id}")
    @ApiOperation(value = "Retorna um produto pelo seu identificador (id)")
    public Produto listaProdutoUnico(@PathVariable("id")Long id){
        return produtoRepository.findById(id).orElse(null);
    }

    @PostMapping("/produto")
    @ApiOperation(value = "Grava no banco de dados um produto")
    public Produto salvarProduto(@RequestBody Produto produto){
        return produtoRepository.save(produto);
    }

    @DeleteMapping("/produto/{id}")
    @ApiOperation(value = "Remove um produto")
    public ResponseEntity<Void> deleteProduto(@PathVariable("id") Long id){
        produtoService.removerProduto(id);
         return ResponseEntity.noContent().build();

    }

    @PutMapping("/produto/{id}")
    @ApiOperation(value = "Atualiza um produto")
    public Produto atualizar(@RequestBody Produto produto, @PathVariable("id") Long id){

        if(produtoRepository.existsById(id)){
           return produtoRepository.save(produto);

        }
         throw new RuntimeException("Erro!!");
    }


}
