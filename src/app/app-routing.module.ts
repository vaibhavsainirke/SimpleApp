import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './components/districtmain/detail/detail.component';
import { DistrictmainComponent } from './components/districtmain/districtmain.component';
import { AddDistrictsComponent } from './components/add-districts/add-districts.component';

const routes: Routes = [
  { path: 'detail', component: DetailComponent },
  { path: 'districtmain', component: DistrictmainComponent },
  { path: 'add-districts', component: AddDistrictsComponent },
  { path: '', redirectTo: '/districtmain', pathMatch: 'full' },
  { path: 'districtmain/detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
