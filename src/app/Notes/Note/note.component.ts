import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Note } from 'src/app/Note';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {


  @Input()
  note: Note = new Note; //input coming from notes-list.ts

  @Output() noteDelete : EventEmitter<Note> = new EventEmitter(); // create a event emiiter which emits the event from child(this) to parent component(notes-list)

  constructor() { 
  }

  onClick(note : Note){

    this.noteDelete.emit(note);

    console.log("onclick running");
  }

  ngOnInit(): void {
  } 

}
