import { StatesService } from 'src/app/services/states.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'districtmain',
  templateUrl: './districtmain.component.html',
  styleUrls: ['./districtmain.component.css'],
})
export class DistrictmainComponent implements OnInit, OnChanges {
  status: any;
  states: any = [];
  district: any = [];
  stateStatus: any = [];
  filterData: string = '';
  selectBoxForm!: FormGroup;
  showTable: boolean = false;
  location: any = { state_id: '', status: '' };
  displayedColumns: string[] = ['name', 'date', 'status'];

  constructor(private state: StatesService) {
    this.location = {
      state_id: null,
      status: null,
    };
  }

  ngOnChanges(_changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.selectBoxForm = new FormGroup({
      states: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
    this.states = this.state.states();
  }

  onChangeState(state: any) {
    if (state != null) {
      this.state.states().filter((data) => (this.status = data.status));
    } else {
      this.district = [];
    }
    if (this.district.length > 0) {
      this.showTable = true;
    } else {
      this.showTable = false;
    }
  }
}
