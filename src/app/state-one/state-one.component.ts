import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateTwoComponent } from "../state-two/state-two.component";
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
interface userInterFace{
  FirstName:string;
  LastName:string;
  Email:string;
  Password:string;
}
@Component({
    selector: 'app-state-one',
    standalone: true,
    templateUrl: './state-one.component.html',
    styleUrl: './state-one.component.css',
    imports: [FormsModule, StateTwoComponent,CommonModule,RouterLink]
})
export class StateOneComponent {
  public firstname = '';
  public lastname = '';
  public email = '';
  public password = '';
  public userArray:userInterFace[]=[]
constructor(public route:Router){}
  ngOnInit(){
    if(localStorage['userData']){
      this.userArray=JSON.parse(localStorage["userData"])
      console.log(this.userArray);
      
    }
  }
signData(){
    let userObject ={
      FirstName:this.firstname,
      LastName:this.lastname,
      Email:this.email,
      Password:this.password,
    }
   this.userArray.push(userObject)
   console.log(this.userArray);
   localStorage.setItem("userData", JSON.stringify(this.userArray))
  }

  userId(id:number){
    this.route.navigate(["/user{{id}}"])  
  }

  // del(i: number) {
  //   this.userArray.splice(i, 1);
  //   // localStorage.setItem('setData', JSON.stringify(this.userArray));
  // }
}
