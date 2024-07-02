import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LotacoesRoutingModule } from './lotacoes-routing.module';
import { LotacoesComponent } from './lotacoes/lotacoes.component';
import { FormatDatePipe } from './pipes/format-date.pipe';


@NgModule({
  declarations: [
    LotacoesComponent,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    LotacoesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    FormatDatePipe
  ]
})
export class LotacoesModule { }
