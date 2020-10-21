import { Injectable } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embauche : Personne[]=[];
  constructor() { 
    
  }
  getembauche ():Personne[]{
    return this.embauche;
  }

  embaucher(personne:Personne){
const index =this.embauche.indexOf(personne);
console.log(this.embauche);
if(index == -1){
this.embauche.push(personne);

}
else{
alert('deja embauché');
}
  }

}
