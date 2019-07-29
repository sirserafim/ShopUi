import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-basket',
  templateUrl: './view-basket.component.html',
  styleUrls: ['./view-basket.component.css']
})
export class ViewBasketComponent implements OnInit {

  clickMessage = '';

  onClickGetType() {
   if(this.updatetype.value==1)
   {
      let obs = this.http.get('http://localhost:8080/st/stocks/whitegoods');
      obs.subscribe((response) => console.log(response));
      this.clickMessage = 'white goods are in the console';
   }else if(this.updatetype.value==2){
    let obs = this.http.get('http://localhost:8080/st/stocks/gadgets');
    obs.subscribe((response) => console.log(response));
    this.clickMessage = 'gadgets are in the console';
   }else if(this.updatetype.value==3){
    let obs = this.http.get('http://localhost:8080/st/stocks/electronics');
    obs.subscribe((response) => console.log(response));
    this.clickMessage = 'electronics are in the console';
   }else {

    this.clickMessage = 'please select type of product ';
   }


  }
  
  updatetype = new FormControl('');
  updateName() {
    this.updatetype.setValue('Nancy');

  }
  constructor(private http : HttpClient) { 


  }

  ngOnInit()
    {
     
    }
}
