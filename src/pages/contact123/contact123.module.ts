import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact123 } from './contact123';

@NgModule({
  declarations: [
    Contact123,
  ],
  imports: [
    IonicPageModule.forChild(Contact123),
  ],
  exports: [
    Contact123
  ]
})
export class Contact123Module {}
