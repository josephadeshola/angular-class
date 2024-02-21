import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
interface userInterFace {
  FirstName: String;
  LastName: String;
  Email: String;
  Password: String;
}
@Component({
  selector: 'app-displaycontact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './displaycontact.component.html',
  styleUrl: './displaycontact.component.css'
})
export class DisplaycontactComponent {
  index = 0;
  public userArray: userInterFace[] = []
  userName: String = ""
  last: String = ""
  emails: String = ""
  phone: String = ""
  noUserFound: boolean = false;
  deleteMessage: string = '';
  firstname = ''
  lastname = ''
  email = ''
  password = ''


  constructor(public activate: ActivatedRoute, public route: Router) {
    console.log(activate.snapshot.params['id'])

  }
  // public userObj:{}={}
  ngOnInit() {
    if (localStorage['userData']) {
      this.userArray = JSON.parse(localStorage['userData'])
      this.index = this.activate.snapshot.params['id']
      console.log(this.userArray[this.index]);
      // this.getUser = this.contactArray[this.index]
      this.userName = this.userArray[this.index].FirstName
      this.last = this.userArray[this.index].LastName
      this.emails = this.userArray[this.index].Email
      this.phone = this.userArray[this.index].Password
      // console.log(this.userObj);

    }
  }
  deleteInfo(index: number) {
    this.userArray.splice(index, 1);
    localStorage.setItem('userData', JSON.stringify(this.userArray));
    this.checkIfNoUser();
    this.route.navigate(['/'])
  }
  checkIfNoUser() {
    this.noUserFound = this.userArray.length === 0;
    alert("no user")

  }
  editUser(index:number){
    let myuser={
      FirstName:this.firstname,
      LastName:this.lastname,
      Email:this.email,
      Password:this.password
    }
    this.userArray[index]={...this.userArray[index], ...myuser}
    console.log(this.userArray);
    
  }
} 

