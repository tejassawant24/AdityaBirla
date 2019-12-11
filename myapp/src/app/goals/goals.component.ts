import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {AdityaBirlaServices} from "../../Shared/Services/calculatorgoal.services"
import {SelectgoalsComponent} from "../selectgoals/selectgoals.component"
import { Icalculatorgoal } from 'src/Shared/Interfaces(Structure)/calculatorgoal';
import { Igoal } from 'src/Shared/Interfaces(Structure)/goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: [/*'./goals.component.css'*/],
})
export class GoalsComponent implements OnInit {
public goals:Igoal;

  constructor(private router:Router, private route : ActivatedRoute, private abs: AdityaBirlaServices) { }
 
  ngOnInit() {
  

    
  }


    Replan(){
      this.router.navigateByUrl("");
    }

    goalQuestion: Array<object>=[
      {
      "type" :  "Retirement",
      "questions":[
          {name:"What's your current age?", options:[{name:'10%',value:10}]},
          {name:"At what age you plan to retire?"},
          {name:"What are your current annual expenses?"},
          {name:"What is the expected rate of inflation? (Before Retirement)"},
          {name:"What is the expected rate of return? (Before Retirement)"},
          {name:"What is the expected rate of return on your retirement saving? (Post Retirement)"},
          {name:"How much can you invest as lumpsum today for your retirement?"}
      ],
  },
  {
      "type" :  "Bike",
      "questions":[
          {q1:"What's your current age?", options:[{name:'10%',value:10}]},
          {q2:"At what age you plan to retire?"},
          {q3:"What are your current annual expenses?"},
          {q4:"What is the expected rate of inflation? (Before Retirement)"},
          {q5:"What is the expected rate of return? (Before Retirement)"},
          {q6:"What is the expected rate of return on your retirement saving? (Post Retirement)"},
          {q7:"How much can you invest as lumpsum today for your retirement?"}
      ],
  }

 
  ]
}
