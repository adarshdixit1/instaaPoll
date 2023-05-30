import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RagisterserviceService } from 'src/app/new/ragisterservice.service';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';

@Component({
  selector: 'app-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.css']
})
export class RagisterComponent implements OnInit {
  data:any
  // to get login-form data
formData ={
  name:"",
  email:"",
  password:"",
}

// displayheading=false
Errorheading:boolean=false;

ngOnInit(): void {
  console.log('subject emit')
    this.homeNavDataService.AddNav.next(true);
    this.homeNavDataService.AddDashboard.next(false);
}
  constructor(private route:Router, private ragisterservice:RagisterserviceService, private homeNavDataService:HomeNavDataservicesService ){}
  onSubmit(){
    console.log(this.formData)
    const payload=this.formData;
    this.ragisterservice.postData(payload).subscribe((response: any) => {
     let boolean = response.Boolean
     if(boolean==1){
      this.route.navigate(['/login']);
     }
     else{
      Errorheading:boolean=true;
     }
      });
  }

  // submit() {
  //   this.route.navigate(['/']);
  // }
}
