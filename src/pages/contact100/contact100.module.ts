import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact100 } from './contact100';

@NgModule({
  declarations: [
    Contact100,
  ],
  imports: [
    IonicPageModule.forChild(Contact100),
  ],
  exports: [
    Contact100
  ]
})
export class Contact100Module {}
