import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [CommonModule,FormsModule,FormsModule],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {

  firstname=''
  lastname=''
  age=''
  email=''
  password=''
  acceptTerms:any
  submitForm(){

  }
}
