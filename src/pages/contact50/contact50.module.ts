import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact50 } from './contact50';

@NgModule({
  declarations: [
    Contact50,
  ],
  imports: [
    IonicPageModule.forChild(Contact50),
  ],
  exports: [
    Contact50
  ]
})
export class Contact50Module {}
