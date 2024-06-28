import { Component } from '@angular/core';

import { Lotacao } from './../model/lotacao';

@Component({
  selector: 'app-lotacoes',
  templateUrl: './lotacoes.component.html',
  styleUrls: ['./lotacoes.component.scss']
})
export class LotacoesComponent {

  lotacoes: Lotacao[] = [
    { _id: 8353, codigo: 1000000000, sigla: 'PR', descricao: 'PRESIDENCIA', idResponsavel: null, idSubstitutoResponsavel: null, dataInicial: new Date('1974-11-04T03:00:00.000+0000'), dataFinal, idPai, codigoPai, siglaPai, descricaoPai, telefone, endereco, cep, numero, bairro, municipio, uf, codigoCnae, logradouro }
  ];
  displayedColumns = ['_id', 'codigo', 'sigla', 'descricao', 'idResponsavel', 'idSubstitutoResponsavel', 'dataInicial', 'dataFinal', 'idPai', 'codigoPai', 'siglaPai', 'descricaoPai', 'telefone', 'endereco', 'cep', 'numero', 'bairro', 'municipio', 'uf', 'codigoCnae', 'logradouro']

  constructor() {
    // this.lotacoes = [];
  }

}
