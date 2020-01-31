import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {

  items = [
    {
        id : 1,
        name : "sugar",
        cat:"grocery",
        price:44,
        int:"kg",
    },{
        id : 2,
        name : "dal",
        cat:"grocery",
        price:180,
        int:"kg",
    },{
        id : 3,
        name : "wheat",
        cat:"grocery",
        price:56,
        int:"kg",
    },{
        id : 4,
        name : "oil",
        cat:"grocery",
        price:165,
        int:"kg",
    },{
        id : 5,
        name : "soap",
        cat:"grocery",
        price:36,
        int:"kg",
    },{
        id : 6,
        name : "biscut",
        cat:"grocery",
        price:10,
        int:"kg",
    },{
        id : 7,
        name : "rice",
        cat:"grocery",
        price:55,
        int:"kg",
    },{
        id : 8,
        name : "salt",
        cat:"grocery",
        price:12,
        int:"kg",
    }
  ]
  matchItems=[];
  newList=[];
  curPdt={
    curquality:0,
    curprice:0
  };
  curAmt=0;

  constructor() { }

  ngOnInit() {
  }

  selectProduct(event) {
      this.matchItems = [];
      let getValue = event.target.value;
    for(let i=0;i<this.items.length;i++){
      let shortVal = this.items[i].name.slice(0,getValue.length);
      if(getValue == shortVal){
        if(getValue != ""){
        this.matchItems.push(this.items[i]);
      }
      }
    }
  }

  selectItem(i){
     document.getElementById('pdt-name').value = this.matchItems[i].name;
     document.getElementById('pdt-id').value = this.matchItems[i].id;
     document.getElementById('pdt-qty').focus();
     this.matchItems = [];
  }

  addList(){
       let pdtName = document.getElementById('pdt-name').value;
       let pdtId =  Number(document.getElementById('pdt-id').value);
       let pdtqty = Number(document.getElementById('pdt-qty').value);
    if(pdtName != "" && pdtId != 0 && pdtqty!= 0) {
      for(let i=0;i<this.items.length;i++){
        if(pdtId == this.items[i].id){
              Object.assign(this.curPdt,this.items[i]);
              this.curPdt.curquality = pdtqty;
              var amt = Number(this.items[i].price)*pdtqty;
              this.curPdt.curprice = Number(amt.toFixed(2));
              this.curAmt = this.curPdt.curprice+this.curAmt;
              this.newList.push(this.curPdt);
        }
      }
    }
  }

}