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
  question: any
  questiondata() {
    this.questionService.getquestion({ event_id: '0' }).subscribe((Response: any) => {
      // console.log(Response)
      this.question = Response.map((val: any, i: number) => { return { que_id: val.Id, question: val.Question, participants: [...this.participants] } })
      // console.log(this.question ,"this is question for print")
    })
  }
  // for geting Event detail by id
  event: any
  participants: any
  participantData() {
    let val = this.extractedId;
    console.log(val, "this is value in ts component")
    this.eventratingservice.participantName({ event_id: val }).subscribe((response: any) => {
      this.event = response.eventDetail
      this.participants = response.participantsDetail.map((val: any) => { return { ...val, rating: [] } })
      // console.log(this.event, "this is user data in ts file")
      return this.participants

    })
  }
  displayStyle = "none";
  displayContainer = "block"
  displayError = false



  //for display and submit rating 
  person: any
  ratingData: any = {
    value: []
  }

  // For submit of rating
  Rating: { question: number, participant: number, rating: number }[] = []
  Onsubmit() {
    
    
    // console.log(this.question[0].que_id,"this is question id for making array")
    // console.log(this.question.length)
    // console.log(this.participants.length)
    // console.log(this.participants[0].rating.length,"this is array")
    for (let i = 0; i < this.question.length; i++) {
      for (let j = 0; j < this.participants.length; j++) {
        let newArray: any = {
          question: this.question[i].que_id,
          participant: this.participants[j].Id,
          rating: this.participants[j].rating[i]
        }
        this.Rating.push(newArray)
      }
    }

    // console.log(this.Rating,"this is array of rating")

    // console.log(this.participants, "this is formdata participants after submit")

    this.eventRatingInputService.eventRating(this.Rating).subscribe((response: any) => {
      // console.log(response, "this is response form nodejs")
      if(response.Boolean==1){
        this.displayStyle = "block";
        this.displayContainer = "none"
      }
      else{
        this.displayError=true;
      }
    })
  }
}
