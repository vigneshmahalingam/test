import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact111 } from './contact111';

@NgModule({
  declarations: [
    Contact111,
  ],
  imports: [
    IonicPageModule.forChild(Contact111),
  ],
  exports: [
    Contact111
  ]
})
export class Contact111Module {}
