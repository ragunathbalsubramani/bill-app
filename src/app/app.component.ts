import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  sidebarHeight = window.innerHeight;
  contentboxWidth:number;

ngOnInit(){

  let divWidth = document.getElementById('menu-container').offsetWidth;

  if(window.innerWidth<=768){
    this.contentboxWidth = window.innerWidth;
  }else{
       this.contentboxWidth = window.innerWidth - divWidth;
  }
}
 
onResize(event) {
  let divWidth = document.getElementById('menu-container').offsetWidth;
  let getBodyWidth = event.target.innerWidth;

    if(getBodyWidth<=768){
          this.contentboxWidth = window.innerWidth;
    }else{
      this.contentboxWidth = window.innerWidth - divWidth;
    }
}
}
