import { Component, OnInit } from '@angular/core';
import { HomeNavDataservicesService } from 'src/app/new/home-nav-dataservices.service';
import { QuestionServiceService } from 'src/app/new/question-service.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  constructor(private homeNavDataServices: HomeNavDataservicesService,
    private questionService: QuestionServiceService) { }
  Boolean: boolean = false;
  title: any
  question: any

  // for getting Question from frontpage
  formData = {
    Event: localStorage.getItem('Id'),
    question: "",
  }


  // for loading a question form database to frontpage
  load_data() {
    let payload = this.formData.Event
    console.log(this.formData.Event)
    this.questionService.getquestion({ event_id: payload }).subscribe((Response: any) => { })
    this.question = {}

  }

  ngOnInit(): void {
    this.homeNavDataServices.AddDashboard.next(true);
    this.homeNavDataServices.AddNav.next(false);
    this.title = localStorage.getItem('ParticipantName')
    this.load_data()
  }

  // for submit of question
  OnSubmit() {
    this.formData.question = this.formData.question.trim()
    const payload = this.formData
    console.log(payload)
    if (this.formData.question != '') {
      // console.log(this.formData)

      this.questionService.postQuestion(payload).subscribe((response: any) => {
        this.load_data()
        this.formData.question = '';
      })
    }
  }
  // for delete a question
  // delete(Id:any){

  // // }

  // CreatLink() {
  //   // this.displayStyle="block";
  //   let Id = localStorage.getItem("Id")
  //   this.ValidateLink(Id);
  // }

  // ValidateLink(Id: any) {
  //   this.ValidateLinkService.validate({ event_id: Id }).subscribe((response: any) => {
  //     console.log()
  //     if (response.Boolean == 1) {
  //       this.link = this.baseURL + 'eventrating/' + Id
  //       this.LinkBoolean = true
  //     }
  //     else {
  //       this.linkExpiryMessage = "Link is expired"
  //     }
  //   })
  // }


}

