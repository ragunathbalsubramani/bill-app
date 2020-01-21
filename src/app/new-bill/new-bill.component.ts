import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

strTime:string;
strDate:string;
strDay:string;
  



  constructor() { }

  ngOnInit() {
    setInterval(() => {
    this.setTimeUpdate();
    },1000);
  }

  setTimeUpdate() {
   var  upDate = new Date();
   var days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
   var updateMinute;
   var hours = upDate.getHours();
   var minutes = upDate.getMinutes();
   var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
     updateMinute = minutes < 10 ? '0'+minutes : minutes;
     this.strDay = days[upDate.getDay()];
     this.strDate = upDate.getDate()+'-'+upDate.getMonth()+1+'-'+upDate.getFullYear();
     this.strTime = hours + ':' + updateMinute + ':'+upDate.getSeconds()+ ' ' + ampm;
    return(this.strTime);
    }

 

}