import { Component,OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { MemberServiceService } from 'src/app/services/member-service.service';
import { ParticipantserviceService } from 'src/app/serivces/participantservice.service';
import { PartytopicInserviceService } from 'src/app/serivces/partytopic-inservice.service';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { ParticipantDeleteServicService } from 'src/app/new/participant-delete-servic.service';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
  // for recving Id of event
 
  users: any
  people: any
  data: any;
  Boolean:boolean=false;

  // to get login-form data
  formData = {
    Event:localStorage.getItem('Id'),
    Name: "",
  }
  
  

  selectedOption: any;
  constructor(
    private route: Router,
    private http: HttpClient,
    private memberservice: MemberServiceService,
    private participantservice: ParticipantserviceService,
    private partytopicservice: PartytopicInserviceService,
    private homeNavDataServices:HomeNavDataservicesService,
    private ParticipantDeleteService:ParticipantDeleteServicService
  ) {
// for send data in database
// this.participantservice.postData(this.formData).subscribe((response: any) => {})

// this.http.get('http://localhost:500/participant').subscribe((data: any) => {
//   console.log(data, "this is data of participant"); // handle the response data here
//   this.people = data
//   console.log(this.people)
//   this.route.navigate(['/Add_Participant'])
// });

// this.participantservice.postData(this.formData).subscribe((response:any)=>{
// console.log(response,"this is response from participant table")
// this.people= response
// })

}

  
  OnSubmit() {
    this.formData.Name=this.formData.Name.trim()
    const payload = this.formData
    // console.log(payload)
    if(this.formData.Name!=''){
    // console.log(this.formData)
    // console.log("this is data of partytopic")
    
    this.memberservice.postData(payload).subscribe((response) => {
      // this.data = response
      // console.log(response)
      // console.log(this.data)
      // return this.data
      this.load_data()
      this.formData.Name='';
      
    });}
else{
  this.Boolean=true
  // console.log(true)
  this.formData.Name='';
}
   
  }
  Back(){
    this.route.navigate(['/events']);
  }
  title:any
  ngOnInit(): void {
    // console.log('subject emit')
      this.homeNavDataServices.AddDashboard.next(true);
      this.homeNavDataServices.AddNav.next(false);
       this.title =localStorage.getItem('ParticipantName')
       this.load_data()
      
  }

  load_data(){
    this.participantservice.postData(this.formData).subscribe((response:any)=>{
      // console.log(response,"this is response from participant table")
      this.people= response
      // console.log(this.people)
      })
    // this.http.get('http://localhost:500/participant').subscribe((data: any) => {
    //     console.log(data, "this is data of participant"); // handle the response data here
    //     this.people = data
    //     console.log(this.people)
    //     this.route.navigate(['/Add_Participant'])
    //   });
  }

  delete(Id:any){
// console.log(Id)
this.ParticipantDeleteService.delete({participantId:Id}).subscribe((response:any)=>{
  console.log(response)
  this.load_data();
})
  }
}
