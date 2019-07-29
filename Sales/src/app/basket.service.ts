import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BasketService {

  printToConsole(arg){
    console.log(arg);
  }
  constructor(private http: HttpClient) { }


}
