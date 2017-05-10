import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact24 } from './contact24';

@NgModule({
  declarations: [
    Contact24,
  ],
  imports: [
    IonicPageModule.forChild(Contact24),
  ],
  exports: [
    Contact24
  ]
})
export class Contact24Module {}
