import { Lotacao } from './../model/lotacao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LotacoesService {

  private readonly API = 'http://localhost:8080/sgpeapi/v1/lotacao/list/'

  constructor(private httpClient: HttpClient) { }

  // Método List com retorno do tipo Observable.
  list(){
    return this.httpClient.get<Lotacao[]>(this.API);
  }
}
