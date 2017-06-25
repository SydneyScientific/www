import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdInputModule,
  MdMenuModule,
  MdProgressBarModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule,
  MdGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MdInputModule, MdButtonModule, MdCheckboxModule, MdSidenavModule,
    MdProgressBarModule, MdCardModule, MdMenuModule, MdDialogModule,
    MdSnackBarModule, MdToolbarModule, MdGridListModule
  ],
  exports: [
    MdInputModule, MdButtonModule, MdCheckboxModule, MdSidenavModule,
    MdProgressBarModule, MdCardModule, MdMenuModule, MdDialogModule,
    MdSnackBarModule, MdToolbarModule, MdGridListModule
  ]
})
export class MaterialImportModule {
}
