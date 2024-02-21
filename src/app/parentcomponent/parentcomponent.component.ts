import { Component } from '@angular/core';
import { Behaviourchild2Component } from '../behaviourchild2/behaviourchild2.component';
import { BehaviourchildComponent } from '../behaviourchild/behaviourchild.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parentcomponent',
  standalone: true,
  imports: [Behaviourchild2Component,BehaviourchildComponent,CommonModule,FormsModule],
  templateUrl: './parentcomponent.component.html',
  styleUrl: './parentcomponent.component.css'
})
export class ParentcomponentComponent {
  firstname= '';
  lastname= '';
  email= '';
  age= '';
  allArray:any=[];
  createUser() {
    if(localStorage['behaviour']){
      this.allArray=JSON.parse(localStorage['behaviour'])
    }
    const users={
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      age:this.age
    }
    this.allArray.push(users)
    localStorage.setItem("behaviour",JSON.stringify(this.allArray))
  //   this.route.navigate(['/new']);
  }
}
