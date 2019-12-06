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

    
}
