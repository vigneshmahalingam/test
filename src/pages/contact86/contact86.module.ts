import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact86 } from './contact86';

@NgModule({
  declarations: [
    Contact86,
  ],
  imports: [
    IonicPageModule.forChild(Contact86),
  ],
  exports: [
    Contact86
  ]
})
export class Contact86Module {}
