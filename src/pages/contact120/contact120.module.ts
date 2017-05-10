import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact120 } from './contact120';

@NgModule({
  declarations: [
    Contact120,
  ],
  imports: [
    IonicPageModule.forChild(Contact120),
  ],
  exports: [
    Contact120
  ]
})
export class Contact120Module {}
