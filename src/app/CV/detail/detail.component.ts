import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input() personne : Personne;
  constructor(private embaucheService:EmbaucheService) { }

  ngOnInit(): void {
    console.log(this.personne);
  }
  embaucherec(){
  this.embaucheService.embaucher(this.personne);
}
}
