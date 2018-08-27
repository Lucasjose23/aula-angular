import { Lista } from './../lista';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {

  disableButton = true;

  lista=new Lista();
  nome:string;
  produto:string;
  
  constructor() { 
    this.lista.produto=new Array();
  }

  ngOnInit() {
  }
  


  AdicionarProduto(pProduto)
  {
    
    this.lista.produto.push(pProduto);
    this.lista.nome=this.nome;
   
  }

  AlterarProduto(indice, novoProduto)
  {
    this.lista.produto[indice] = novoProduto;
  }

  ExcluirProduto(indice)
  {
    this.lista.produto.splice(indice);
  }
  EditarProduto(indice,pproduto)
  {
    this.produto=pproduto;
   this.lista.produto.splice(indice);
  }

}
