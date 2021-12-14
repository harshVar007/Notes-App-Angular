import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesAddFormComponent } from './Notes/notes-add-form/notes-add-form.component';
import { NotesComponentComponent } from './Notes/notes-component/notes-component.component';
import { NotesListComponent } from './Notes/notes-list/notes-list.component';
import { NoteComponent } from './Notes/Note/note.component';
import { FormsModule } from '@angular/forms';
import { AboutComponentComponent } from './Notes/about-component/about-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponentComponent,
    NotesAddFormComponent,
    NotesListComponent,
    NoteComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
