import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact150 } from './contact150';

@NgModule({
  declarations: [
    Contact150,
  ],
  imports: [
    IonicPageModule.forChild(Contact150),
  ],
  exports: [
    Contact150
  ]
})
export class Contact150Module {}
