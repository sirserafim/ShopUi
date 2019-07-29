import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sales';
  constructor(private svc: BasketService,private http : HttpClient)
  {
this.svc.printToConsole('Got the service');
  }
  ngOnInit()
    {
     
    }
    
}
