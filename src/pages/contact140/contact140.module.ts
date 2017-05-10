import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact140 } from './contact140';

@NgModule({
  declarations: [
    Contact140,
  ],
  imports: [
    IonicPageModule.forChild(Contact140),
  ],
  exports: [
    Contact140
  ]
})
export class Contact140Module {}
