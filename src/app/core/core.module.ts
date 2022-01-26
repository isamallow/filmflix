import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    // importar o MaterialModule para o header c html funcionar
    MaterialModule
  ],
  exports: [
    // exportar o header
    HeaderComponent
  ]
})
export class CoreModule { }
