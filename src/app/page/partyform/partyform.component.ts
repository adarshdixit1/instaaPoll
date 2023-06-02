import { Component, OnInit } from '@angular/core';
import { PartyServiceService } from 'src/app/services/party-service.service';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { EventlinkserviceService } from 'src/app/new/eventlinkservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partyform',
  templateUrl: './partyform.component.html',
  styleUrls: ['./partyform.component.css']
})
export class PartyformComponent implements OnInit {

  data1: any;
  // to get login-form data
  data = localStorage.getItem('check');
  formData = {
    User:this.data,
    Name: "",
    Place: "",
    Date: "",
    Time: "",
    Description: "",
    Hour:"6"
  }

  constructor(private route: Router,
     private http: HttpClient, 
     private partyservice: PartyServiceService,
      private homeNavDataServices:HomeNavDataservicesService,
      private eventlinkservive: EventlinkserviceService,) { }
  displayheading: boolean = false
  baseURL: string=environment.sideUrl;
  

  OnSubmit() {
    // console.log(this.formData, "this is party_form party_form data")
    // localStorage.setItem("hour",this.formData.Hour)
    this.partyservice.postData(this.formData).subscribe((response: any) => {
      console.log(response, "this is response in partyform")
      if (response.Boolean == 1) {
        this.displayheading = false
    this.homeNavDataServices.SubmitLink.next(true)
      this.GoToAddParticipant(response.Id)
      this.CreatLink(response.Id)
      
      }
      if (response.Boolean == 0) {
        this.displayheading = true
      }

    })
  }
  GoToAddParticipant(data: any) {
    this.route.navigate(['/add-participant'])
    localStorage.setItem("Id", data)
    localStorage.setItem("ParticipantName", this.formData.Name)
  }
  CreatLink(Id:any){
    let link = this.baseURL+'eventrating/' + Id
    this.SubmitLink(link,Id)
  }
  SubmitLink(link:any,Id:any){
    this.eventlinkservive.eventlink({hour: this.formData.Hour, link:link, event_id:Id}).subscribe((data: any) => {
      console.log(data, "this is data after submit link is work")
    })
  }

  back() {
    this.route.navigate(['/events']);
  }

  ngOnInit(): void {
    console.log('subject emit')
    this.homeNavDataServices.AddDashboard.next(true);
  }
}
