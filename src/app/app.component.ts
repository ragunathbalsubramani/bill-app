import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  sidebarHeight = window.innerHeight;
  contentboxWidth:number = window.innerWidth - 300;
  getBodyWidth:number;
 
onResize(event) {
    this.getBodyWidth = event.target.innerWidth;
    if(this.getBodyWidth<1400){
      this.contentboxWidth = window.innerWidth - 250;
    }
}
}
