import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Personne} from 'src/app/model/Personne';
import { CvService } from '../services/cv.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input () personne : Personne;
//@Output () selectedPersonne =new EventEmitter();
  constructor(
    private cvservice:CvService
  ) { }

  ngOnInit(): void {
  }
selectPersonne(){
  console.log('je click sur item');
/*this.selectedPersonne.emit(
  this.personne
  );*/
this.cvservice.clickOnItem(this.personne);
  };
}
