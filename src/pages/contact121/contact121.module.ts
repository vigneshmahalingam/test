import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact121 } from './contact121';

@NgModule({
  declarations: [
    Contact121,
  ],
  imports: [
    IonicPageModule.forChild(Contact121),
  ],
  exports: [
    Contact121
  ]
})
export class Contact121Module {}
