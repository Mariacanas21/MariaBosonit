import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: any[]=[]; //Array con las diferentes notas
 

  constructor() {}

  ngOnInit(): void {
  }

  addNewNote(note:string){
    this.notes.push({id:this.notes.length,name:note});
  }

  deleteNote(indice:number){
    this.notes = this.notes.filter(not => not.id!==indice);
  }
}
