import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personne : Personne[];
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
        'img.jpeg'),
      new Personne(
        2,
        'ouenniche',
        'khouloud',
        26,
        56789,
        'student',
        'img.jpeg'),

    ];

    
  }

}
