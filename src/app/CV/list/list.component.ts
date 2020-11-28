import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
personne : Personne[];
@Output () selectedPersonne = new EventEmitter();
  constructor(
    private cvservice:CvService
  ) { }

  ngOnInit(): void {
   this.cvservice.getpersonne().subscribe(
     (personne)=> this.personne=personne,
     (erreur)=> {
       this.personne=this.cvservice.getFakepersonne();
       alert('probleme de cnx les dnées sont fakes')}
   );
  }
 /* selectPersonne(choice){
    console.log(choice);
this.selectedPersonne.emit(choice)

  }*/
}
