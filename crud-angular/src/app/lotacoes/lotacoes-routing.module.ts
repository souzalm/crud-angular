import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LotacoesComponent } from './lotacoes/lotacoes.component';

const routes: Routes = [
  { path: '', component: LotacoesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotacoesRoutingModule { }
