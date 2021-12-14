import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponentComponent } from './Notes/about-component/about-component.component';
import { NotesComponentComponent } from './Notes/notes-component/notes-component.component';

const routes: Routes = [
{ path : '' , component : NotesComponentComponent},
{ path : 'about' , component : AboutComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
