import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  id!: number;
  district: any = [];
  inputToggle: boolean = false;
  closeToggle: boolean = true;
  edit: any = { name: '', state: '', status: '' };

  constructor(private route: ActivatedRoute, private state: StatesService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.getDistrict();
    console.log(this.id);
  }

  getDistrict() {}

  editState() {
    this.inputToggle = true;
    this.closeToggle = false;
  }

  editStateCancel() {
    this.inputToggle = false;
    this.closeToggle = true;
  }

  saveData() {}
}
