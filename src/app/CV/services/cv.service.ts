import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from 'src/app/model/Personne';

@Injectable({
  providedIn: 'root'
})

export class CvService {
private personne : Personne[];
nbclick=0;
clicksubject = new Subject<Number>();
selectItelSubject = new Subject<Personne>();

  constructor() {  this.personne=[
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
  ]; }
  
  getpersonne() : Personne[] {
    return this.personne;
  }
  getpersonneByid(id):Personne{
   return this.personne.find(
  (pers:Personne) => pers.id ===+id );
  }

  deletepersone(personne : Personne){

    const index=this.personne.indexOf(personne);
    if(index ===-1){
      alert('personne inexistant');
      return 0;
    }
    else{
      this.personne.splice(index,1)
      return 1 ;}
    }

   addPerson(personnes : Personne){
      const id = this.personne[this.personne.length-1].id;
      personnes.id=id+1;
     this.personne.push(personnes); 
    }
  click(){
    this.nbclick ++;
    this.clicksubject.next(this.nbclick);
  }
    clickOnItem(personne :Personne){
      console.log('je dispatch cette personne');
      this.selectItelSubject.next(personne);
    }
}
