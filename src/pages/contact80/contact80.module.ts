import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact80 } from './contact80';

@NgModule({
  declarations: [
    Contact80,
  ],
  imports: [
    IonicPageModule.forChild(Contact80),
  ],
  exports: [
    Contact80
  ]
})
export class Contact80Module {}
