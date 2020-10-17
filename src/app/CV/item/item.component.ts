import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Personne} from 'src/app/model/Personne';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input () personne : Personne;
@Output () selectedPersonne =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
selectPersonne(){
  console.log(this.personne.name+'from item');
this.selectedPersonne.emit(
  this.personne
  );

  };
}
