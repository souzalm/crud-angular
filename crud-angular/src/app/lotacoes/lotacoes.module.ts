import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { LotacoesRoutingModule } from './lotacoes-routing.module';
import { LotacoesComponent } from './lotacoes/lotacoes.component';


@NgModule({
  declarations: [
    LotacoesComponent
  ],
  imports: [
    CommonModule,
    LotacoesRoutingModule,
    MatTableModule
  ]
})
export class LotacoesModule { }
