import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

const Material=[
  MatIconModule,
  MatTableModule
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
