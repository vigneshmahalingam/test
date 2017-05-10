import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact91 } from './contact91';

@NgModule({
  declarations: [
    Contact91,
  ],
  imports: [
    IonicPageModule.forChild(Contact91),
  ],
  exports: [
    Contact91
  ]
})
export class Contact91Module {}
