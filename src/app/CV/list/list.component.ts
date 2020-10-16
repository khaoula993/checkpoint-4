import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
@Input () personne : Personne[];
  constructor() { }

  ngOnInit(): void {
  }

}
