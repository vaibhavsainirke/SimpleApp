import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  states() {
    return [
      {
        state_id: 1,
        state_name: 'Uttarakhand',
        status: 'Active',
      },
      {
        state_id: 2,
        state_name: 'Maharashtra',
        status: 'Active',
      },
    ];
  } 
}
