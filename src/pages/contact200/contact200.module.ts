import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact200 } from './contact200';

@NgModule({
  declarations: [
    Contact200,
  ],
  imports: [
    IonicPageModule.forChild(Contact200),
  ],
  exports: [
    Contact200
  ]
})
export class Contact200Module {}
