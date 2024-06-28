export interface Lotacao {
  _id: number;
  codigo: number;
  sigla: string;
  descricao: string;
  idResponsavel: number | null;
  idSubstitutoResponsavel: number | null;
  dataInicial: Date;
  dataFinal: Date;
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
}
