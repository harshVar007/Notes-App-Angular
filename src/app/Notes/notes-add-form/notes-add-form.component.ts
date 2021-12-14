import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/Note';

@Component({
  selector: 'app-notes-add-form',
  templateUrl: './notes-add-form.component.html',
  styleUrls: ['./notes-add-form.component.css']
})
export class NotesAddFormComponent implements OnInit {

   Sno : number = 0
   Title : String = ''
   Note : String = ''

   @Output() noteAdd: EventEmitter<Note> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Submit Button Clicked")
    
     const Note = {
       
       sno : this.Sno++,
       title: this.Title,
       desc : this.Note,
    
     }
      console.log(Note);
      this.noteAdd.emit(Note);

  }

}
