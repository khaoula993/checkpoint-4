import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauchec',
  templateUrl: './embauchec.component.html',
  styleUrls: ['./embauchec.component.css']
})
export class EmbauchecComponent implements OnInit {
embauche:Personne[];
  constructor(private embaucheService:EmbaucheService) { }

  ngOnInit(): void {
    this.embauche=this.embaucheService.getembauche();
  }

}
