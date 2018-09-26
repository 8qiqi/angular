import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  set(key,value){
    localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key);
  }
  constructor() { }
}
