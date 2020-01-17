import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-angular-assignment3';
  showParagraph: boolean = true;
  totalClicks = [];
  lastClick: number = 0;

  togglePara(){
    this.showParagraph = ! this.showParagraph ;
    this.lastClick++;
    this.totalClicks.push(this.lastClick);
    console.log(this.totalClicks);
  }
  getColor(){
    
  }
}
