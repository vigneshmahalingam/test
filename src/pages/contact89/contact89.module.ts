import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact89 } from './contact89';

@NgModule({
  declarations: [
    Contact89,
  ],
  imports: [
    IonicPageModule.forChild(Contact89),
  ],
  exports: [
    Contact89
  ]
})
export class Contact89Module {}
