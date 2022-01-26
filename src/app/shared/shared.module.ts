import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // adicão do MaterialModule
    // quando o Shared for puxado por outro módulo as funcionalidades do material irão junto
    MaterialModule
  ]
})
export class SharedModule { }
