import { Component } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';

@Component({
  selector: 'userpay',
  templateUrl: './userpay.component.html'
})
export class UserPayComponent {
  //title = 'app works!';
  details = [
    {
      id: 1,text: 'Test 1',batch: '001' ,admin: '001'
    },
    {
      id: 2,text: 'Test 2',batch: '002' ,admin: '002'
    },
    {
      id: 3,text: 'Test 3',batch: '003' ,admin: '003'
    },
    {
      id: 4,text: 'Test 4',batch: '004' ,admin: '004'
    },
    {
      id: 5,text: 'Test 5',batch: '005' ,admin: '005'
    }
  ];
}
