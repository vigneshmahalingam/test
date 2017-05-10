import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact90 } from './contact90';

@NgModule({
  declarations: [
    Contact90,
  ],
  imports: [
    IonicPageModule.forChild(Contact90),
  ],
  exports: [
    Contact90
  ]
})
export class Contact90Module {}
