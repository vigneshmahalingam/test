import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact112 } from './contact112';

@NgModule({
  declarations: [
    Contact112,
  ],
  imports: [
    IonicPageModule.forChild(Contact112),
  ],
  exports: [
    Contact112
  ]
})
export class Contact112Module {}
