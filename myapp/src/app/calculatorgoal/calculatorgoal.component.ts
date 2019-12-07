import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { Icalculatorgoal } from "../../Shared/Interfaces(Structure)/calculatorgoal";
import { Regx } from "../../Shared/Regular expression/regx";
import { Router } from "@angular/router";
import { AdityaBirlaServices } from "../../Shared/Services/calculatorgoal.services";

@Component({
  selector: "app-calculatorgoal",
  templateUrl: "./calculatorgoal.component.html",
  styleUrls: [/*"./calculatorgoal.component.css"*/]
})
export class CalculatorgoalComponent implements OnInit {
  public userForm: FormGroup;
  public submitted = false;
  public gender: string="../../assets/img/2nd page images/male single icon.png";
  public marriedImg: string =
    "../../assets/img/2nd page images/married male icon.png";
  public profImg: string =
    "../../assets/img/2nd page images/male self employeed.png";
  public numberOfKids: any;
  public validator: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private abs: AdityaBirlaServices
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ["", [Validators.required, Regx.Name]],
      gender: [true],
      maritalStatus: [true],
      child: [false],
      kids: [0, [Regx.kids]],
      profession: [false]
    });

    // Dynamic changes in male image
    // if (this.userForm.value.gender == true) {
    //   let gender = {
    //     gender: "../../assets/img/2nd page images/male single icon.png"
    //   };
    // }

    // if (this.userForm.value.gender == false) {
    //   let gender = {
    //     gender: "../../assets/img/2nd page images/female single icon.png"
    //   };
    // }
  }

  //Dynamic changes in male and female image
  genderImg() {
    if (this.userForm.value.gender == true) {
      this.gender = "../../assets/img/2nd page images/male single icon.png";
      this.marriedImg ="../../assets/img/2nd page images/married male icon.png";
      this.profImg="../../assets/img/2nd page images/male self employeed.png"
      console.log(this.gender);
      console.log(this.userForm.value.gender);
    } else {
      this.gender = "../../assets/img/2nd page images/female single icon.png";
      this.marriedImg ="../../assets/img/2nd page images/married female icon.png";
      this.profImg="../../assets/img/2nd page images/female self employeed.png";
      console.log(this.gender);
      console.log(this.userForm.value.gender);
    }
  }
  //Toggling of married male and married female images wrt gender value
  maritalStatusImg() {
    if (this.userForm.value.gender == true && this.userForm.value.maritalStatus == true) {
      this.marriedImg ="../../assets/img/2nd page images/married male icon.png";
      console.log(this.userForm.value.gender);
      console.log(this.userForm.value.maritalStatus);
    }

  else  if(this.userForm.value.gender == false && this.userForm.value.maritalStatus == true){
      this.marriedImg ="../../assets/img/2nd page images/married female icon.png";
      console.log(this.userForm.value.gender);
      console.log(this.userForm.value.maritalStatus);
    }

  else  if (this.userForm.value.gender == true && this.userForm.value.maritalStatus == false) {
      this.marriedImg ="../../assets/img/2nd page images/male single icon.png";
      console.log(this.userForm.value.gender);
      console.log(this.userForm.value.maritalStatus);
    }

    // if (this.userForm.value.gender == false && this.userForm.value.maritalStatus == false) {
    //   this.marriedImg ="../../assets/img/2nd page images/male single icon.png";
    //   console.log(this.userForm.value.gender);
    //   console.log(this.userForm.value.maritalStatus);
    // }

    else(this.marriedImg ="../../assets/img/2nd page images/female single icon.png");

    //Toggling between married and single images wrt marital status value
    // this.userForm.value.maritalStatus
    //   ? (this.marriedImg = "../../assets/img/2nd page images/male icon.png")
    //   : (this.marriedImg = "../../assets/img/2nd page images/female icon.png");
  }

  professionImg() {
    if (
      this.userForm.value.gender == true &&
      this.userForm.value.profession == true
    ) {
      this.profImg = "../../assets/img/2nd page images/male salaried.png";
    }
   else  if (
      this.userForm.value.gender == false &&
      this.userForm.value.profession == true
    ) {
      this.profImg = "../../assets/img/2nd page images/female salaried.png";
    }
    else if (
      this.userForm.value.gender == true &&
      this.userForm.value.profession == false
    ) {
      this.profImg = "../../assets/img/2nd page images/male self employeed.png";
    } else
      this.profImg =
        "../../assets/img/2nd page images/female self employeed.png";
  }

  //Methods to store and show no. of kids on click event on 4 kids images
  kid1() {
    this.userForm.value.kids = 1;
    this.numberOfKids = this.userForm.value.kids;
    console.log(this.numberOfKids);
    this.validator="";
  }
  kid2() {
    this.userForm.value.kids = 2;
    this.numberOfKids = this.userForm.value.kids;
    console.log(this.numberOfKids);
    this.validator="";
  }
  kid3() {
    this.userForm.value.kids = 3;
    this.numberOfKids = this.userForm.value.kids;
    console.log(this.numberOfKids);
    this.validator="";
  }
  kid4() {
    this.userForm.value.kids = 4;
    this.numberOfKids = this.userForm.value.kids;
    console.log(this.numberOfKids);
    console.log(this.userForm.value.kids);
    this.validator="";
  }

  //Data coming from Reactive form on click event
  Save(data: Icalculatorgoal) {
    this.submitted = true;
    console.log(this.userForm.valid);
   

    if (this.userForm.value.gender == true) {
      data.gender = "Male";
    }
    if (this.userForm.value.gender == false) {
      data.gender = "Female";
    }

    if (this.userForm.value.maritalStatus == true) {       //no. of kids error
      data.maritalStatus = "Married";
    }

    if (this.userForm.value.maritalStatus == true) {      //kids error
      data.maritalStatus = "Married";
    }
    if (this.userForm.value.maritalStatus == false) {
      data.maritalStatus = "Unmarried";
    }

    if (this.userForm.value.child == true) {               //no. of kids error
      data.child = "Yes";
    }
    if (this.userForm.value.child == false) {
      data.child = "None";
    }

    if (this.userForm.value.profession == true) {
      data.profession = "Salaried";
    }
    if (this.userForm.value.profession == false) {
      data.profession = "Self-Employed";
    }

    //Validation for no. of kids
    if (this.userForm.value.child == false) {
      data.kids = 0;
    } 
    else if (this.userForm.value.kids === 0) {
       console.log(this.userForm.value.kids)
        return this.validator = "*Please enter number of Kids*";
        
      }

    if (this.userForm.valid) {
      this.router.navigateByUrl("/selectgoals");
    } else {
      this.router.navigateByUrl("/calculatorgoal");
    }
    console.log(data);
    if (this.userForm.valid) {
      this.abs.postCalculatorgoal(data).subscribe(item => {
        console.log(item);
      });
    }
  }
}
