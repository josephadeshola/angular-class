import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MybehaviourService } from '../sevices/mybehaviour.service';

@Component({
  selector: 'app-behaviourchild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviourchild.component.html',
  styleUrl: './behaviourchild.component.css'
})
export class BehaviourchildComponent {
  public currentUser: any = ''
  userArray:any=[]
  constructor(public behaviour: MybehaviourService) { }
  ngOnInit(){
   if(localStorage['behaviour']){
   this.userArray =JSON.parse(localStorage['behaviour'])
   }
   else{
    this.behaviour.behaviours.subscribe(result=>{
      console.log(result);
      this.userArray.push(result)
      
    })
   }
  }
  getUser(useritem: any,i:any) {
    this.currentUser = useritem
    this.behaviour.behaviours.next(this.currentUser)
   localStorage.setItem("behaveCurrent",i)
  }
  del(i:any){
    this.userArray.splice(i,1)
    localStorage.setItem("behaviour",JSON.stringify(this.userArray))
  }  
  }

