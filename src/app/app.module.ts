import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './materials/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DetailComponent } from './components/districtmain/detail/detail.component';
import { DistrictmainComponent } from './components/districtmain/districtmain.component';
import { AddDistrictsComponent } from './components/add-districts/add-districts.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    DistrictmainComponent,
    AddDistrictsComponent,
  ],

  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
