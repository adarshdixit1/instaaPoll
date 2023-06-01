import { Component, OnInit } from '@angular/core';
import { PartyServiceService } from 'src/app/services/party-service.service';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    Hour:""
  }

  constructor(private route: Router, private http: HttpClient, private partyservice: PartyServiceService, private homeNavDataServices:HomeNavDataservicesService) { }
  displayheading: boolean = false
  

  OnSubmit() {
    console.log(this.formData, "this is party_form party_form data")
    this.partyservice.postData(this.formData).subscribe((response: any) => {
      console.log(response, "this is response in partyform")
      if (response.Boolean == 1) {
        this.displayheading = false
        this.route.navigate(['/events']);
      }
      if (response.Boolean == 0) {
        this.displayheading = true
      }
    })
  }
  submit() {
    this.route.navigate(['/add-participant']);
  }

  ngOnInit(): void {
    console.log('subject emit')
      this.homeNavDataServices.AddDashboard.next(true);
  }
}
