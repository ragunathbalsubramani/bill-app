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

  if(window.innerWidth<=1400 && window.innerWidth>1200){
    this.contentboxWidth = window.innerWidth - 250;
  }else if(window.innerWidth<=1200 && window.innerWidth>900){
    this.contentboxWidth = window.innerWidth - 200;
  }else if(window.innerWidth<=900 && window.innerWidth>768){
    this.contentboxWidth = window.innerWidth - 150;
  }else if(window.innerWidth<=768){
    this.contentboxWidth = window.innerWidth;
  }else{
       this.contentboxWidth = window.innerWidth - 300;
  }
}
 
onResize(event) {
    var getBodyWidth = event.target.innerWidth;
    if(getBodyWidth<=1400 && getBodyWidth>1200){
      this.contentboxWidth = window.innerWidth - 250;
    }else if(getBodyWidth<=1200 && getBodyWidth>900){
      this.contentboxWidth = window.innerWidth - 200;
    }else if(getBodyWidth<=900 && getBodyWidth>768){
      this.contentboxWidth = window.innerWidth - 150;
    }else if(getBodyWidth<=768){
          this.contentboxWidth = window.innerWidth;
    }else{
      this.contentboxWidth = window.innerWidth - 300;
    }
}
}
