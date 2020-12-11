import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produto} from '../_models/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // endpoit
  protected  UrlServiceV1: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  obterProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.UrlServiceV1}/produtos`)
  }
  // postMatricula(matricula: Matricula){
  //   return this.http.post(`${this.UrlServiceV1}/cursos/matricula`,matricula);
  // }
  //
  // obeterMeusCursos(userId: number): Observable<Curso[]>{
  //   return this.http.get<Curso[]>(`${this.UrlServiceV1}/cursos/matricula/user/${userId}`);
  // }
  //
  removeProduto(produtoId: number){
    return this.http.delete(`${this.UrlServiceV1}/produto/${produtoId}`);
  }
  postProduto(produto: Produto){
    return this.http.post(`${this.UrlServiceV1}/produto`, produto);
  }

  putProduto(produto: Produto){
    return this.http.put(`${this.UrlServiceV1}/produto/${produto.id}`, produto);
  }

}
