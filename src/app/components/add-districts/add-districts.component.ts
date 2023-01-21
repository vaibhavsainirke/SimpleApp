import { Component, OnInit } from '@angular/core';
import { StatesService } from 'src/app/services/states.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-add-districts',
  templateUrl: './add-districts.component.html',
  styleUrls: ['./add-districts.component.css'],
})
export class AddDistrictsComponent implements OnInit {
  states: any[] = [];
  dataToSave: any = { state_id: '', name: '' };

  constructor(
    private StatesService: StatesService,
    private cityService: LocalstorageService
  ) {}

  ngOnInit(): void {
    this.states = this.StatesService.states();
  }

  add() {
    let districtToAdd = this.dataToSave;
    
    let districts: any = this.cityService.getData('districts');

    if (!districts) {
      districts = [];
    }
    districts.push(districtToAdd);

    this.cityService.saveData('districts', JSON.stringify(districts));
  }
}
