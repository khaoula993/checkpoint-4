import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Personne} from 'src/app/model/Personne';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input () personne : Personne;
  constructor() { }

  ngOnInit(): void {
  }

}
