import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-selectgoals',
  templateUrl: './selectgoals.component.html',
  styleUrls: ['./selectgoals.component.css']
})
export class SelectgoalsComponent implements OnInit {
public goals:[{}]=[{}]

@Output() Eid = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addRetirement(){
    let retirement ={
      id:1,
      goal:"Retiremnet",
      img:"../../assets/img/retirement color icon.png"
    }
       this.Eid.emit(retirement);
  }

  addHoliday(){
    let holiday ={
      id:2,
      goal:"Holiday",
      img:"../../assets/img/retirement color icon.png"
    }
    this.Eid.emit(holiday);
  }
  addHoneymoon(){
    let honey ={
      id:3,
      goal:"Honeymoon",
      img:"../../assets/img/retirement color icon.png"
    }
    
    

      this.Eid.emit(honey);
    
  }
  addMarriage(){
    let marriage ={
      id:4,
      goal:"Marriage",
      img:"../../assets/img/retirement color icon.png"
    }
   
   
     
      this.Eid.emit(marriage);
    
  }
  addCar(){
    let car ={
      id:5,
      goal:"Car",
      img:"../../assets/img/retirement color icon.png"
    }
  
      this.Eid.emit(car);    
  }
  addBike(){
    let bike ={
      id:6,
      goal:"Bike",
      img:"../../assets/img/retirement color icon.png"
    }
    
      this.Eid.emit(bike);
    
  }
  addLuxuryCar(){
    let luxuryCar ={
      id:7,
      goal:"Luxury Car",
      img:"../../assets/img/retirement color icon.png"
    }
   
      this.Eid.emit(luxuryCar);
    
  }
  addStartingBusiness(){
    let startingBusiness ={
      id:8,
      goal:"Starting Business",
      img:"../../assets/img/retirement color icon.png"
    }
   
    
     
      this.Eid.emit(startingBusiness);
    
  }
  addSelfDevelopment(){
    let selfDevelopment ={
      id:9,
      goal:"Self Development",
      img:"../../assets/img/retirement color icon.png"
    }
    
    
      
      this.Eid.emit(selfDevelopment);
    
  }
  addChildsEducation(){
    let childsEducation ={
      id:9,
      goal:"Child's Education",
      img:"../../assets/img/retirement color icon.png"
    }
    
    
     
      this.Eid.emit(childsEducation);
    
  }
  addChildsMarriage(){
    let childMarriage ={
      id:10,
      goal:"Child Marriage",
      img:"../../assets/img/retirement color icon.png"
    }
    
    
      
        this.Eid.emit(childMarriage);
    
  }
  addWorldTour(){
    let worldTour ={
      id:11,
      goal:"World Tour",
      img:"../../assets/img/retirement color icon.png"
    }
    
    
  
      this.Eid.emit(worldTour);
    
  }
  addWealthCreation(){
    let wealthCreation ={
      id:12,
      goal:"Wealth Creation",
      img:"../../assets/img/retirement color icon.png"
    }
    
    
      
      this.Eid.emit(wealthCreation);
    
  }
  addFollowPassion(){
    let followPassion ={
      id:13,
      goal:"Follow Passion",
      img:"../../assets/img/retirement color icon.png"
    }
   
    
      
      this.Eid.emit(followPassion);
    
  }
  addPhilanthropy(){
    let philanthropy ={
      id:14,
      goal:"Philanthropy",
      img:"../../assets/img/retirement color icon.png"
    }
  
      this.Eid.emit(philanthropy);
    
  }


 
}
