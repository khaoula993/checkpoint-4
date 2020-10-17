import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personne : Personne[];
  selectedPersonne : Personne;
  constructor() { }

  ngOnInit() : void{
    this.personne=[
      new Personne(
        1,
        'ouenniche',
        'khaoula',
        27,
        1234,
        'student',
        'rotating_card_profile.png'),
      new Personne(
        2,
        'ouenniche',
        'khouloud',
        26,
        56789,
        'student',
        'rotating_card_profile2.png'),
        new Personne(
          3,
          'hamza',
          'khouloud',
          16,
          56789,
          'student',
          ''),
    ];    
  }
  selectPersonne(personne){
    this.selectedPersonne = personne;

  }

}
