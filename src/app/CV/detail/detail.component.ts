import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/model/Personne';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input() personne : Personne;
  constructor(
   private embaucheService:EmbaucheService,
   private router: Router,
   private cvService :CvService) { }

  ngOnInit(): void {
    console.log(this.personne);
    this.cvService.selectItelSubject.subscribe(
            (personne)=>this.personne=personne
      );
  }
  embaucherec(){
  this.embaucheService.embaucher(this.personne);
}
detail(){
  const link= ['cv',this.personne.id];
  this.router.navigate(link);
}
}
