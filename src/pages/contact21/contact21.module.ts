import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact21 } from './contact21';

@NgModule({
  declarations: [
    Contact21,
  ],
  imports: [
    IonicPageModule.forChild(Contact21),
  ],
  exports: [
    Contact21
  ]
})
export class Contact21Module {}
