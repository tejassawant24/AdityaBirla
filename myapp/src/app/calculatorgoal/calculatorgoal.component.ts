import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Icalculatorgoal } from "../../Shared/Interfaces(Structure)/calculatorgoal";
import { Regx } from "../../Shared/Regular expression/regx";
import { Router } from "@angular/router";
import { AdityaBirlaServices } from "../../Shared/Services/calculatorgoal.services";

@Component({
  selector: "app-calculatorgoal",
  templateUrl: "./calculatorgoal.component.html",
  styleUrls: ["./calculatorgoal.component.css"]
})
export class CalculatorgoalComponent implements OnInit {
  public userForm: FormGroup;
  public submitted = false;
  public gender: string =
    "../../assets/img/2nd page images/male single icon.png";
  public marriedImg: string =
    "../../assets/img/2nd page images/married male icon.png";

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
      kids: ["0", [Validators.required, Regx.kids]],
      profession: [false]
    });

    //Dynamic changes in male image
    // if(this.userForm.value.gender == true){
    //   let gender={
    //     gender:"../../assets/img/2nd page images/male single icon.png"
    //   }
    // }

    // if(this.userForm.value.gender == false){
    //   let gender={
    //     female:"../../assets/img/2nd page images/female single icon.png"
    //   }
    // }
  }
  //Dynamic changes in male and female image
  genderImg() {
    if (this.userForm.value.gender == true) {
      this.gender = "../../assets/img/2nd page images/female single icon.png";
      this.marriedImg =
        "../../assets/img/2nd page images/married female icon.png";
      console.log(this.gender);
      console.log(this.userForm.value.gender);
    } else {
      this.gender = "../../assets/img/2nd page images/male single icon.png";
      this.marriedImg =
        "../../assets/img/2nd page images/married male icon.png";
      console.log(this.gender);
      console.log(this.userForm.value.gender);
    }
  }
  //Toggling of married male and married female images wrt gender value
  maritalStatusImg() {
    this.userForm.value.gender == true
      ? (this.marriedImg =
          "../../assets/img/2nd page images/married male icon.png")
      : (this.marriedImg =
          "../../assets/img/2nd page images/married female icon.png");

    //Toggling between married and single images wrt marital status value
    this.userForm.value.maritalStatus
      ? (this.marriedImg = "../../assets/img/2nd page images/male icon.png")
      : (this.marriedImg = "../../assets/img/2nd page images/female icon.png");
  }

  //Data coming from Reactive form on click event
  Save(data: Icalculatorgoal) {
    this.submitted = true;

    if (this.userForm.value.gender == true) {
      data.gender = "Male";
    }
    if (this.userForm.value.gender == false) {
      data.gender = "Female";
    }

    if (this.userForm.value.maritalStatus == true) {
      data.maritalStatus = "Married";
    }
    if (this.userForm.value.maritalStatus == false) {
      data.maritalStatus = "Unmarried";
    }

    if (this.userForm.value.child == true) {
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
