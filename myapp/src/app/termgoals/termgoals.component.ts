import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-termgoals',
  templateUrl: './termgoals.component.html',
  styleUrls: ['./termgoals.component.css']
})
export class TermgoalsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  Replan(){
    this.router.navigateByUrl("");
  }

}
