import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../services/login-service.service';
import { SessionStorageService } from '../services/session-storage.service';
import { HomeNavDataservicesService } from '../new/home-nav-dataservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
data:any
  // to get login-form data
formData ={
  email:"",
  password:"",
}
// displayheading=false
displayheading:boolean=false;

constructor(private http:HttpClient, private loginService:LoginServiceService, private router:Router, private sessionservice:SessionStorageService, private homeNavDataService:HomeNavDataservicesService){}
onSubmit(){
  // console.log(this.formData)
  const payload=this.formData;
  // localStorage.setItem('check', this.data.Boolean);
  this.loginService.postData(payload).subscribe((response: any) => {
    this.data=response
    // console.log(response.user.Name,"this is data response in login")
    // console.log(response)
    if(response.Boolean==1){
      this.router.navigate(['/dashboard']);
      localStorage.setItem("Name",response.user.Name)
      localStorage.setItem("Email",this.formData.email)
      this.sessionservice.postData(response.user.Id)
    }
    else{
      localStorage.removeItem('check');
      this.displayheading=true
      // console.log(this.displayheading)
    }
    return this.data
    });
}

ngOnInit(): void {
  // console.log('subject emit')
    this.homeNavDataService.AddNav.next(true);
    this.homeNavDataService.AddDashboard.next(false);
}
}
