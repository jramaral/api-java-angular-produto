import { Component, OnInit, TemplateRef } from '@angular/core';
import {Produto} from '../_models/produto';
import {ProdutoService} from '../_services/produto.service';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-curso',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  modoSalvar = 'post';
  registerForm: FormGroup;
  produtos: Produto[];
  produto: Produto;
  bodyDeletarProduto='';


  constructor(private produtoService: ProdutoService,
              private toastr: ToastrService,
              private fb: FormBuilder,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.validation();
    this.getProdutos()
  }

  openModal(template: any){
    this.registerForm.reset();
    template.show();
  }
  newProduto(template: any){
    this.modoSalvar = 'post';
    this.openModal(template)
  }
  editProduto(template: any, produto: Produto){
    this.modoSalvar = 'put';
    this.openModal(template)
    this.produto = Object.assign({}, produto);
    this.registerForm.patchValue(this.produto);
  }
  excluirProduto(produto: Produto, template: any) {
    this.openModal(template);
    this.produto = produto;
    this.bodyDeletarProduto = `Tem certeza que deseja excluir o Produto: ${this.produto.nomeProduto}, Código: ${this.produto.id}`;
  }
  confirmeDelete(template: any) {
    this.produtoService.removeProduto(this.produto.id).subscribe(
      () => {
        template.hide();
        this.getProdutos();
        this.toastr.success('Produto deletado com sucesso!');
      }, error => {
        console.log(error);
        this.toastr.error('Erro ao tentar deletar!');
      }
    );
  }

  getProdutos() {
    this.produtoService.obterProdutos().subscribe(
      (_produto: Produto[]) => {
        this.produtos = _produto;

      }, error => {
        console.log(error);
      });
  }
  salvarAlteracao(template: any){
    if(this.registerForm.valid){
      if(this.modoSalvar==='post'){

        this.produto = Object.assign({}, this.registerForm.value);

        this.produtoService.postProduto(this.produto).subscribe(
          (novoProduto:Produto) =>{

            template.hide();
            this.getProdutos();
            this.toastr.success('Produto adicionado com sucesso!');
          }, error => {
            console.log(error)
            this.toastr.error('Erro ao tentar salvar o Produto!');
          }
        );
      }else{
        this.produto = Object.assign({id: this.produto.id}, this.registerForm.value);
        console.log(this.produto)
        this.produtoService.putProduto(this.produto).subscribe(
          () =>{
            template.hide();
            this.getProdutos();
            this.toastr.success('Produto atualizado com sucesso!');
          }, error => {
            console.log(error)
            this.toastr.error('Erro ao tentar atualizar o Produto!');
          }
        );
      }
    }
  }

  validation(){
    this.registerForm = new FormGroup({
      //objeto que eu quero validar. esse objeto corresponde a cda um dos campos do formulario.
      nomeProduto: new FormControl('',
        [Validators.required, Validators.minLength(4), Validators.maxLength(50)]
      ),
      quantidade: new FormControl('',
        [Validators.required, Validators.min(1)]
      ),
      valorUnitario: new FormControl('', Validators.required)
    })
  }
}
