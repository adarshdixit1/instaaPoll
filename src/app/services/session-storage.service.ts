import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }
  postData(data:any){
    localStorage.setItem('check',data);
  }
storedData = localStorage.getItem('check');
get(){
  console.log(this.storedData)
}
}
