import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

    Replan(){
      this.router.navigateByUrl("");
    }
  

}
