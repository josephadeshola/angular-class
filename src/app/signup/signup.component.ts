import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface myUserInterFace{
  FirstName:String;
  LastName:String;
  Age:string;
  Address:String;
  Email:String;
  Password:String;

}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public firstname = ''
  public lastname = ''
  public email = ''
  public age = ''
  public address = ''
  public password = ''
  public message= ''
  public style= ''

  constructor(public route: Router) { }

  ngOnInit(){
    this.userArray=JSON.parse(localStorage['userData'])  
  }
  public userArray:myUserInterFace[]=[];
  createUser(){
    
    if (!this.firstname || !this.lastname || !this.email || !this.address || !this.age || !this.password) {
      this.message = 'Please fill in all fields.';
      this.style = 'alert alert-danger text-center';
      return;
    }
    let studentObj={
      FirstName:this.firstname,
      LastName:this.lastname,
      Age:this.age,
      Address:this.address,
      Email:this.email,
      Password:this.password
      
    }
    this.userArray.push(studentObj);
    localStorage.setItem("userData", JSON.stringify(this.userArray))
    console.log(this.userArray);
    this.route.navigate(['/login'])
  }
}
