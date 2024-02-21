import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MybehaviourService {
  public userArray:any=[]

  constructor() { }
  public behaviours= new BehaviorSubject <any[]>([{
    firstname:"Ayomide",
    lastname:"Adeshola",
    age:"20",
    email:"joseph@125d@gmail.com"
  }]); 
  
}
