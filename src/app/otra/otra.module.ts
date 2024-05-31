import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtraPageRoutingModule } from './otra-routing.module';

import { OtraPage } from './otra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtraPageRoutingModule
  ],
  declarations: [OtraPage]
})
export class OtraPageModule {}
