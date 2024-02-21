import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
constructor(public itemService:StateService){}
public user= 'Adeshola'
public myuser=this.itemService.item

}
