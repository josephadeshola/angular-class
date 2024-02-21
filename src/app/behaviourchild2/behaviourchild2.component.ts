import { Component } from '@angular/core';
import { MybehaviourService } from '../sevices/mybehaviour.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behaviourchild2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './behaviourchild2.component.html',
  styleUrl: './behaviourchild2.component.css'
})
export class Behaviourchild2Component {
  public index: number = 0;
  public behaviour_obj: any = {}
  public editedUser: any = {};
  firstname = ''
  lastname = ''
  email = ''
  age = ''
  constructor(public behaviour: MybehaviourService) { }
  ngOnInit() {
    console.log(this.behaviour.behaviours);
    this.behaviour.behaviours.subscribe(response => {
      this.behaviour_obj = response
    })
  }
  saveChanges() {
    let i = localStorage['behaveCurrent']
    let getBackUser = JSON.parse(localStorage['behaviour'])
    if (!this.firstname || !this.lastname || !this.email || !this.age) {
      alert("fields are required");
    }
    else {

      let Obj = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        age: this.age
      }
      getBackUser.splice(i, 1 , Obj);
      localStorage.setItem("behaviour", JSON.stringify(getBackUser))
    }

  }

}
