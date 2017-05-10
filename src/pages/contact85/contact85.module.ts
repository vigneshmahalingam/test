import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact85 } from './contact85';

@NgModule({
  declarations: [
    Contact85,
  ],
  imports: [
    IonicPageModule.forChild(Contact85),
  ],
  exports: [
    Contact85
  ]
})
export class Contact85Module {}
