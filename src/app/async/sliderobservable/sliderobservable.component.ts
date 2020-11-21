import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-sliderobservable',
  templateUrl: './sliderobservable.component.html',
  styleUrls: ['./sliderobservable.component.css']
})
export class SliderobservableComponent implements OnInit {
path='tim_logo.png';
paths=[
  '1.png',
   'rotating_card_profile.png', 
   '3.png'
];

sliderObservable = new Observable<string>(
  ( observer)=>{
    let i=0;
    setInterval(
      ()=>{
      if(i===this.paths.length)
      {i=0;}
      else
      {observer.next(this.paths[i++]);}

       },1500
     );
  }
);

  constructor() { }

  ngOnInit() {
    this.sliderObservable.subscribe(
      (path)=>{
      this.path=path;
      console.log(path);
      }
    );
  } 
}
