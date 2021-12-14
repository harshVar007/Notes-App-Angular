import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/Note';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes : Note[];
  constructor() { 
     
    const localItem = localStorage.getItem("notes");
    
    if(localItem == null){
        
        this.notes = [];

    }
     else{

      this.notes = JSON.parse(localItem);

     }
  }

  ngOnInit(): void {
  }

  deleteNote(note: Note){

     console.log(note); 
     const index = this.notes.indexOf(note);
     this.notes.splice(index , 1);
     localStorage.setItem( "notes" , JSON.stringify(this.notes));

  }addNote( note : Note){

    console.log(note);
    this.notes.push(note);
    localStorage.setItem( "notes" , JSON.stringify(this.notes));
 
  }

  

}
