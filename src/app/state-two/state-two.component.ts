import { Component } from '@angular/core';
import { StateOneComponent } from '../state-one/state-one.component';
import { FormsModule } from '@angular/forms';
interface userInterFace{
  FirstName:string;
  LastName:string;
  Email:string;
  Password:string;
}
@Component({
  selector: 'app-state-two',
  standalone: true,
  imports: [StateOneComponent,FormsModule],
  templateUrl: './state-two.component.html',
  styleUrl: './state-two.component.css'
})
export class StateTwoComponent {
itemObject=''

}
