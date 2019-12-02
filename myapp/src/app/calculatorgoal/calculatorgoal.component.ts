import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Icalculatorgoal} from "../../Shared/Interfaces(Structure)/calculatorgoal"
import {Regx} from "../../Shared/Regular expression/regx"
import {Router} from "@angular/router"
import {AdityaBirlaServices} from "../../Shared/Services/calculatorgoal.services"


@Component({
  selector: 'app-calculatorgoal',
  templateUrl: './calculatorgoal.component.html',
  styleUrls: ['./calculatorgoal.component.css']
})
export class CalculatorgoalComponent implements OnInit {
  public userForm:FormGroup
  public submitted=false;
  

  constructor(private fb:FormBuilder, private router:Router, private abs:AdityaBirlaServices) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'name':['', [Validators.required, Regx.Name]],
       'gender':[false],
       'maritalStatus':[true],
       'child' :[false],
       'kids':['0', [ Validators.required, Regx.kids]],
       'profession':[false]
    });

  }
    
  Save(data:Icalculatorgoal){
    
    
    this.submitted=true;
    if(this.userForm.valid ){
     this.router.navigateByUrl("/selectgoals");
    }
    else{
      this.router.navigateByUrl("/calculatorgoal")
    }
    console.log(data);
    if(this.userForm.valid){
      this.abs.postCalculatorgoal(data).subscribe(item =>{
       console.log(item)
      });
    }
    

  }


}
