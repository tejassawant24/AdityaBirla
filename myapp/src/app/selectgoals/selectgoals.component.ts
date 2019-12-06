import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Igoal } from 'src/Shared/Interfaces(Structure)/goal';
import { AdityaBirlaServices } from 'src/Shared/Services/calculatorgoal.services';





@Component({
  selector: 'app-selectgoals',
  templateUrl: './selectgoals.component.html',
  styleUrls: ['./selectgoals.component.css']
})
export class SelectgoalsComponent implements OnInit {
 public goals:Igoal
public abc=1;

  constructor(  private router : Router, private abs: AdityaBirlaServices) { }

  ngOnInit() {
    this.abs.getGoalData().subscribe(data=>{
      console.log(data);
      this.goals=data;
      console.log(this.goals[0].goal);
    });
  }

  // test() {
  //   console.log(this.router.config)
  //   let route = this.router.config.find(r => r.path === 'goals');
  //   console.log(route)
  //   route.data = { entity: 'entity' };
  //   this.router.navigateByUrl('/goals');
  // }

  addRetirement(){
    let retirement ={
      id:1,
      goal:"Retiremnet",
      img:"../../assets/img/retirement color icon.png"
    }
  }  
  //        this.goals.push(retirement);
         
       
  // }

  // addHoliday(){
  //   let holiday ={
  //     id:2,
  //     goal:"Holiday",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
  
  // }
  // addHoneymoon(){
  //   let honey ={
  //     id:3,
  //     goal:"Honeymoon",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
    
    

  // }
  // addMarriage(){
  //   let marriage ={
  //     id:4,
  //     goal:"Marriage",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
   

    
  // }
  // addCar(){
  //   let car ={
  //     id:5,
  //     goal:"Car",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
  
  // }
  // addBike(){
  //   let bike ={
  //     id:6,
  //     goal:"Bike",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
    
      
    
  // }
  // addLuxuryCar(){
  //   let luxuryCar ={
  //     id:7,
  //     goal:"Luxury Car",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
   
    
  // }
  // addStartingBusiness(){
  //   let startingBusiness ={
  //     id:8,
  //     goal:"Starting Business",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
   
    
     
   
    
  // }
  // addSelfDevelopment(){
  //   let selfDevelopment ={
  //     id:9,
  //     goal:"Self Development",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
    
    
 
    
  // }
  // addChildsEducation(){
  //   let childsEducation ={
  //     id:9,
  //     goal:"Child's Education",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
    
    
     
      
    
  // }
  // addChildsMarriage(){
  //   let childMarriage ={
  //     id:10,
  //     goal:"Child Marriage",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
    
    
      
    
  // }
  // addWorldTour(){
  //   let worldTour ={
  //     id:11,
  //     goal:"World Tour",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
    
    
  
     
    
  // }
  // addWealthCreation(){
  //   let wealthCreation ={
  //     id:12,
  //     goal:"Wealth Creation",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
    
    
      
      
    
  // }
  // addFollowPassion(){
  //   let followPassion ={
  //     id:13,
  //     goal:"Follow Passion",
  //     img:"../../assets/img/retirement color icon.png"
  //   }
   
    
      
  
    
  // }
  // addPhilanthropy(){
  //   let philanthropy ={
  //     id:14,
  //     goal:"Philanthropy",
  //     img:"../../assets/img/retirement color icon.png"
  //   }

    
  // }

  // passData(){
  
   
  // }


 
}
