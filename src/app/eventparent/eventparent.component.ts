import { Component } from '@angular/core';
import { EventdhildComponent } from '../eventdhild/eventdhild.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventparent',
  standalone: true,
  imports: [EventdhildComponent,FormsModule],
  templateUrl: './eventparent.component.html',
  styleUrl: './eventparent.component.css'
})
export class EventparentComponent {
text=''
public comment = ''
public acceptComment=''
// getmsg=""
sendComment(){
this.comment=this.text
this.text=''
console.log(this.comment);
}
receiveComment(message:string){
this.acceptComment=message
console.log(this.acceptComment);

}
}
