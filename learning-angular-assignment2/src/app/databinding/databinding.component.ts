import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
username: string = 'nimishawilson';
  constructor() { }

  ngOnInit() {
  }
  emptyUsername(){
    this.username = ''; 
    console.log('----');
  }

}
