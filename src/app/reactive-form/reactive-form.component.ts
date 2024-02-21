import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  firstname:any=''
  constructor(public formbuild: FormBuilder) { }
  public formOne = this.formbuild.group({
    firstname: ['',[Validators.required,Validators.maxLength(6)]],
    lastname: ['',Validators.required],
    email: ['',[Validators.required, Validators.email,Validators.maxLength(20)]],
    password: ['',[Validators.required,Validators.maxLength(6),Validators.minLength(6)]],
    age: ['',Validators.required],
    acceptTerms: [''],
  })
  submitForm() {
    this.firstname=this.formOne.value.firstname
    console.log(this.firstname);
  this.formOne.controls['firstname'].setValue("")  
  this.formOne.controls['password'].setValue("0")  
  }
}
