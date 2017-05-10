import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact42 } from './contact42';

@NgModule({
  declarations: [
    Contact42,
  ],
  imports: [
    IonicPageModule.forChild(Contact42),
  ],
  exports: [
    Contact42
  ]
})
export class Contact42Module {}
