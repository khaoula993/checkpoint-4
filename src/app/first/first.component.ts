import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  two="test";
  
  
  constructor() { }

  ngOnInit(): void {
  }
  show(newname){
    alert(newname);
    this.two=newname;
  }
}
