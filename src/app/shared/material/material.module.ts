import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';


const MaterialElements = [
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatGridListModule
]


@NgModule({
  declarations: [],
  imports: MaterialElements,
  exports: MaterialElements
})
export class MaterialModule { }
