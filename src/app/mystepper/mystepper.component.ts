import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-mystepper',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './mystepper.component.html',
  styleUrl: './mystepper.component.css',
})
export class MystepperComponent {
  firstname = '';
  showFirstForm: boolean = true;
  constructor(public formbuild: FormBuilder) { }
  public userArray: any = {}
  userData:any={}
  
  ngOnInit() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
      console.log(this.userData);
    }

  }
  public formOne = this.formbuild.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
    username: [''],
    phone: [''],
    gender: [''],
    date: [''],
  });
  showSecondForms(){
    this.showFirstForm = false;
  }
  showSecondForm() {
    this.userData={...this.userData,...this.formOne.value}
    console.log(this.formOne.valid);
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }
  showBackForm() {
    this.showFirstForm = true
  }
}
