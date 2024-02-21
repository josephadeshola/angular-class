import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventdhild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventdhild.component.html',
  styleUrl: './eventdhild.component.css'
})
export class EventdhildComponent {
@Input() public receivetext:any=""
 res=""
 @Output() commentEmmit= new EventEmitter
 sendComment(){
  this.commentEmmit.emit(this.res)
  this.res=""
 }
}
