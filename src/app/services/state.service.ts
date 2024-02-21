import { Injectable } from '@angular/core';
import { StateOneComponent } from '../state-one/state-one.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(public stateOne:StateOneComponent) { }
  public item='My name is Ayomide';
  public userArray:[]=[];
  public currentuser:any=''
  
public  returnItem(){
    return this.item
  }
 
  public getStusent(){
    return JSON.parse(localStorage['userData'])
  }
  public getUser(data:any){
    this.currentuser=data 
  }
  getcurrentUSer(){
    return this.currentuser;
  }

  
}
