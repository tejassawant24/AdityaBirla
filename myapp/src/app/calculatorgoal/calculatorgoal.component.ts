import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Icalculatorgoal} from "../../Shared/Interfaces(Structure)/calculatorgoal"
import {Regx} from "../../Shared/Regular expression/regx"
import {Router} from "@angular/router"

@Component({
  selector: 'app-calculatorgoal',
  templateUrl: './calculatorgoal.component.html',
  styleUrls: ['./calculatorgoal.component.css']
})
export class CalculatorgoalComponent implements OnInit {
  public userForm:FormGroup
  public submitted=false;
  

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'name':['', [Validators.required, Regx.Name]],
       'gender':[false],
       'maritalStatus':[true],
       'child' :[false],
       'kids':['', [ Validators.required, Regx.kids]],
       'profession':[false]
    });

  }
    
  Save(data:Icalculatorgoal){
    this.submitted=true;
    console.log(this.userForm.value)
    if(!this.userForm.valid){
     this.router.navigateByUrl("/calculatorgoal");
      
    }
    else{
      this.router.navigateByUrl("/selectgoals")
    }
    console.log(data);
  }


}
