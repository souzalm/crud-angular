import { ILotacao } from './Ilotacao';

export class Lotacao implements ILotacao {
  id: number;
  codigo: number;
  sigla: string;
  descricao: string;
  idResponsavel: number | null;
  idSubstitutoResponsavel: number | null;
  dataInicial: string;
  dataFinal: string;
  idPai: number;
  codigoPai: number;
  siglaPai: string;
  descricaoPai: string;
  telefone: number;
  endereco: string;
  cep: number;
  numero: number;
  bairro: string;
  municipio: string;
  uf: string;
  codigoCnae: number;
  logradouro: string | null;

  constructor(data: Partial<ILotacao>) {
    this.id = data.id!;
    this.codigo = data.codigo!;
    this.sigla = data.sigla!;
    this.descricao = data.descricao!;
    this.idResponsavel = data.idResponsavel || null;
    this.idSubstitutoResponsavel = data.idSubstitutoResponsavel || null;
    this.dataInicial = data.dataInicial!;
    this.dataFinal = data.dataFinal!;
    this.idPai = data.idPai!;
    this.codigoPai = data.codigoPai!;
    this.siglaPai = data.siglaPai!;
    this.descricaoPai = data.descricaoPai!;
    this.telefone = data.telefone!;
    this.endereco = data.endereco!;
    this.cep = data.cep!;
    this.numero = data.numero!;
    this.bairro = data.bairro!;
    this.municipio = data.municipio!;
    this.uf = data.uf!;
    this.codigoCnae = data.codigoCnae!;
    this.logradouro = data.logradouro || null;
  }
}
