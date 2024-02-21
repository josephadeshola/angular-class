import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { StateService } from '../services/state.service';
interface myUserInterFace {
  FirstName: String;
  LastName: String;
  Age: string;
  Address: String;
  Email: String;
  Password: String;

}
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  public email = '';
  public password = '';
  public message = '';
  public style = '';
  public studentArray: myUserInterFace[] = []
  constructor(public route: Router,public mystate:StateService) { }
  ngOnInit() {
    this.studentArray = JSON.parse(localStorage['userData'])
    console.log(this.studentArray);

  }
  logineUser() {
    let checkUser = this.studentArray.find((eachUser) => eachUser.Email == this.email && eachUser.Password == this.password)
    if (checkUser) {
      localStorage.setItem("current_user", JSON.stringify(checkUser))
      this.message = "Login Successfully"
      this.style = "alert alert-success text-center"
      setTimeout(()=>{
        this.route.navigate(["/mydashboard"])
      },3000)
    }
    else {
      this.message = "Login Error"
      this.style = "alert alert-danger text-center"
      setTimeout(() => {
        this.message = ""
        this.style = ""
      }, 2000)
    }
  }
}
