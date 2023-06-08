import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminpageComponent } from './page/adminpage/adminpage.component';
import { AddmemberComponent } from './page/addmember/addmember.component';
import { RatingpageComponent } from './page/ratingpage/ratingpage.component';
import { PartyformComponent } from './page/partyform/partyform.component';
import { PartyRatingComponent } from './party-rating/party-rating.component';
import { AuthenticationGuard } from './authentication.guard';
import { PartyDetailShowComponent } from './party-detail-show/party-detail-show.component';
import { SelectPartyComponent } from './page/select-party/select-party.component';
import { AddCompetitionComponent } from './page/add-competition/add-competition.component';
import { FrontPageComponent } from './page/front-page/front-page.component';
import { RagisterComponent } from './page/ragister/ragister.component';
import { ProfileComponent } from './page/profile/profile.component';
import { EventratingComponent } from './page/eventrating/eventrating.component';
import { AddQuestionComponent } from './page/add-question/add-question.component';
import { RaterComponent } from './page/rater/rater.component';


const routes: Routes = [
  {
    path: "login" ,component: HomeComponent ,title:'InstaaPoll', 
  },
  {
    path: "add-participant", component: AddmemberComponent ,title:'InstaaPoll-add-participant'
  },
  {
    path: "view-rating", component: RatingpageComponent ,title:'InstaaPoll-view-rating' , canActivate:[AuthenticationGuard]
  },
  {
    path: "dashboard", component: AdminpageComponent ,title:'InstaaPoll-dashboard'
  },
  {
    path: "add-event", component: PartyformComponent ,title:'InstaaPoll-add-event' , canActivate:[AuthenticationGuard]
  },
  {
    path: "events", component: PartyDetailShowComponent ,title:'InstaaPoll-events' , canActivate:[AuthenticationGuard]
  },
  {
    path: "profile", component: ProfileComponent ,title:'InstaaPoll-profile' , canActivate:[AuthenticationGuard]
  },
  {
    path: "Select-Event", component: SelectPartyComponent ,title:'InstaaPoll-Select-Event' , canActivate:[AuthenticationGuard]
  },
  {
    path: "Add-Competition", component: AddCompetitionComponent ,title:'InstaaPoll-Add-Competition' , canActivate:[AuthenticationGuard]
  },
  {
    path: "rater/:eventId", component: RaterComponent,title:'InstaaPoll-eventrating'
  },
  {
    path: "eventrating/:eventId", component: EventratingComponent,title:'InstaaPoll-eventrating'
  },
  {
    path: "front-page", component: FrontPageComponent ,title:'InstaaPoll-front-page' 
  },
  {
    path: "register", component: RagisterComponent ,title:'InstaaPoll-register', canActivate:[AuthenticationGuard]
  },
  {
    path: "add-question", component: AddQuestionComponent ,title:'InstaaPoll-question' , canActivate:[AuthenticationGuard]
  },
  {
    path:"**",component:HomeComponent ,title:'InstaaPoll'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
