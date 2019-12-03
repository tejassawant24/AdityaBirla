import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {SelectgoalsComponent} from "../selectgoals/selectgoals.component"
import { Icalculatorgoal } from 'src/Shared/Interfaces(Structure)/calculatorgoal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
})
export class GoalsComponent implements OnInit {
public arr:Icalculatorgoal[]=[];
public getData:[{}];
  constructor(private router:Router, private route : ActivatedRoute) { }
 
  ngOnInit() {
    console.log(this.getData);
    this.route.data.subscribe((res) => {
      console.log(res)
    })
  }

    Replan(){
      this.router.navigateByUrl("");
    }

    
    

  

}
