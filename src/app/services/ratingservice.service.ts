import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingserviceService {
  baseURL: string = environment.apiUrl;
  // url="http://localhost:900/rating"
  constructor(private http:HttpClient) { }
  users(payload:any){
    // console.log("this is service",payload)
    const headers = { 'content-type': 'application/json'}  
    // const body=JSON.stringify(payload);
    console.log(payload,"this is body in rating services")
    return this.http.post(this.baseURL+'events/rating', payload,{'headers':headers});
  }
}
