import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact99 } from './contact99';

@NgModule({
  declarations: [
    Contact99,
  ],
  imports: [
    IonicPageModule.forChild(Contact99),
  ],
  exports: [
    Contact99
  ]
})
export class Contact99Module {}
