import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Icalculatorgoal } from 'src/Shared/Interfaces(Structure)/calculatorgoal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
public arr:Icalculatorgoal[]=[];
  constructor(private router:Router) { }

  ngOnInit() {
  }

    Replan(){
      this.router.navigateByUrl("");
    }

    getData(item){
      this.arr.push(item);
      console.log(this.arr)
    }
  

}
