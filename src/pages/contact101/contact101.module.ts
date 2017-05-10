import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact101 } from './contact101';

@NgModule({
  declarations: [
    Contact101,
  ],
  imports: [
    IonicPageModule.forChild(Contact101),
  ],
  exports: [
    Contact101
  ]
})
export class Contact101Module {}
