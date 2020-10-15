import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-c',
  templateUrl: './inter-c.component.html',
  styleUrls: ['./inter-c.component.css']
})
export class InterCComponent implements OnInit {

  constructor() { }
   nom=" Marvel";
   prenom="John";
   job="CEO";
   citation="I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere";
   decrir="Description";
   mot="Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..";
  image=" ";
  
   ngOnInit(): void {
  }

}
