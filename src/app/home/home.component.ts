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
  isLoading: boolean = false;
  data: any
  // to get login-form data
  formData = {
    email: "",
    password: "",
  }
  // displayheading=false
  displayheading: boolean = false;
  displayStyle = "none";

  constructor(private http: HttpClient,
    private loginService: LoginServiceService,
    private router: Router,
    private sessionservice: SessionStorageService,
    private homeNavDataService: HomeNavDataservicesService) { }
  onSubmit() {
    this.isLoading = true;
    this.displayStyle = "block";
    // console.log(this.formData)
    const payload = this.formData;
    // localStorage.setItem('check', this.data.Boolean);
    this.loginService.postData(payload).subscribe((response: any) => {
      this.data = response
      // this.isLoading=false
      // console.log(response.user.Name,"this is data response in login")
      // console.log(response)
      if (response.Boolean == 1) {
        this.isLoading = false
        this.displayStyle = "none";
        localStorage.setItem("Name", response.user.Name)
        localStorage.setItem("Email", this.formData.email)
        this.sessionservice.postData(response.user.Id)
        this.dashboard();

      }
      else {
        localStorage.removeItem('check');
        this.displayheading = true
        this.isLoading = false
        this.displayStyle = "none";
        // console.log(this.displayheading)
      }
      return this.data
    });
  }

  dashboard() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    // console.log('subject emit')
    // localStorage.removeItem('check');
    this.homeNavDataService.AddNav.next(true);
    this.homeNavDataService.AddDashboard.next(false);
  }
}
