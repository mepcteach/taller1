import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtraPage } from './otra.page';

const routes: Routes = [
  {
    path: '',
    component: OtraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtraPageRoutingModule {}
