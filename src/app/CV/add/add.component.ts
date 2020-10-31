import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from 'src/app/model/Personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private cvservice : CvService,
    protected router:Router
    ) { }

  ngOnInit(): void {
  }

addPerson(personnes : Personne ){
  this.cvservice.addPerson(personnes);
  const link =['cv'];
  this.router.navigate(link);
  console.log(personnes);
}
}
