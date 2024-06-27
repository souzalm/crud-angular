import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotacoesRoutingModule } from './lotacoes-routing.module';
import { LotacoesComponent } from './lotacoes/lotacoes.component';


@NgModule({
  declarations: [
    LotacoesComponent
  ],
  imports: [
    CommonModule,
    LotacoesRoutingModule
  ]
})
export class LotacoesModule { }
