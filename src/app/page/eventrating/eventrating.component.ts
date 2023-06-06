import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventratingserviceService } from 'src/app/new/eventratingservice.service';
import { PartyRatingInService } from 'src/app/services/party-rating-in.service';
import { QuestionServiceService } from 'src/app/new/question-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventrating',
  templateUrl: './eventrating.component.html',
  styleUrls: ['./eventrating.component.css']
})
export class EventratingComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private router: Router,
    private eventratingservice: EventratingserviceService,
    private eventRatingInputService: PartyRatingInService,
    private questionService: QuestionServiceService) {
  }

  // this is for get id from url
  extractedId: any
  ngOnInit(): void {
    this.extractedId = this.route.snapshot.paramMap.get('eventId');
    // this.extractedId ="1";
    // console.log(this.extractedId, "this is from route");
    this.participantData();
    this.questiondata();

  }
// for getting qestion data
question:any
questiondata(){
this.questionService.getquestion({event_id:'0'}).subscribe((Response:any)=>{
// console.log(Response)
this.question=Response.map((val:any, i: number) => { return {que_id: val.Id, question: val.Question, participants: [...this.participants]} })
console.log(this.question ,"this is question for print")
})
}
  // for geting Event detail by id
  event: any
  participants: any
  participantData() {
    let val = this.extractedId;
    console.log(val,"this is value in ts component")
    this.eventratingservice.participantName({ event_id: val }).subscribe((response: any) => {
      this.event = response.eventDetail
      this.participants = response.participantsDetail.map((val:any) => {return {...val, rating: 0}})
      console.log(this.event, "this is user data in ts file")
      return this.participants

    })
  }
  displayStyle = "none";
  displayContainer="block"
 


  //for display and submit rating 
  person: any
  ratingData: any = {
    value: []
  }
  Onsubmit() {
    this.displayStyle = "block";
    this. displayContainer="none"
console.log(this.question)
    console.log(this.ratingData,this.participants, "this is formdata after submit")
    this.eventRatingInputService.eventRating({"ratingValue":this.ratingData.value, "participantId":this.participants}).subscribe((reponse: any) => { })
  }
}
