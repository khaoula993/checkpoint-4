import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/Personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personne : Personne[];
  selectedPersonne : Personne;
  constructor(
    private CvService:CvService
  ) { }

  ngOnInit() : void{
    this.personne=this.CvService.getpersonne(); 
  }
  selectPersonne(personne){
    this.selectedPersonne = personne;

  }

}
