import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color='red';
  constructor(private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
       this.color=params.color;
      }
    );
  }

}
