import { Lotacao } from './../model/lotacao';
import { LotacoesService } from './../services/lotacoes.service';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-lotacoes',
  templateUrl: './lotacoes.component.html',
  styleUrls: ['./lotacoes.component.scss']
})
export class LotacoesComponent implements OnInit {

  lotacoes$: Observable<Lotacao[]>;
  displayedColumns = ['id', 'codigo', 'sigla', 'descricao', 'idResponsavel', 'idSubstitutoResponsavel', 'dataInicial', 'dataFinal', 'idPai', 'codigoPai', 'siglaPai', 'descricaoPai', 'telefone', 'endereco', 'cep', 'numero', 'bairro', 'municipio', 'uf', 'codigoCnae', 'logradouro'];

  constructor(private lotacoesService: LotacoesService) {
    // this.lotacoes = [];
    // this.lotacoesService = new LotacoesService();
    this.lotacoes$ = this.lotacoesService.list().pipe(
      catchError(error => {
        return of([])
      })
    );
  }

  ngOnInit(): void {

  }

}
