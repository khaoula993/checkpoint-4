import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Personne } from 'src/app/model/Personne';
import { CvService } from '../services/cv.service';

const link =['cv'];
@Component({
  selector: 'app-detailperson',
  templateUrl: './detailperson.component.html',
  styleUrls: ['./detailperson.component.css']
})
export class DetailpersonComponent implements OnInit {
personne : Personne;

  constructor(private activatedRoute:ActivatedRoute,
    private cvservice : CvService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
       this.personne=this.cvservice.getpersonneByid(params.id);
      }
    );
  }
  deletepersone(){

    if(this.cvservice.deletepersone(this.personne))
    {
      
      this.router.navigate(link);
    }
  }

  }

