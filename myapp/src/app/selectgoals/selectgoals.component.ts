import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Igoal } from 'src/Shared/Interfaces(Structure)/goal';
import { AdityaBirlaServices } from 'src/Shared/Services/calculatorgoal.services';





@Component({
  selector: 'app-selectgoals',
  templateUrl: './selectgoals.component.html',
  styleUrls: [/*'./selectgoals.component.css'*/]
})
export class SelectgoalsComponent implements OnInit {
 public goals:Igoal[]=[];
 public user_id:any;
 public isRetirementPresent:boolean=false;
 public isHolidayPresent:boolean=false;
 public isHoneymoonPresent:boolean=false;
 public isMarriagePresent:boolean=false;
 public isCarPresent:boolean=false;
 public isBikePresent:boolean=false;
 public isLuxuryCarPresent:boolean=false;
 public isStartingBusinessPresent:boolean=false;
 public isSelfDevelopmentPresent:boolean=false;
 public isChildsEducationPresent:boolean=false;
 public isChildsMarriagePresent:boolean=false;
 public isWorldTourPresent:boolean=false;
 public isWealthCreationPresent:boolean=false;
 public isFollowPassionPresent:boolean=false;
 public isPhilanthropyPresent:boolean=false;
 
 //Images
 public retirementImg="../../assets/img/retirement icon.png";
 public holidayImg="../../assets/img/holiday icon.png";
 public honeyMoonImg="../../assets/img/honeymoon icon.png";
 public marriageImg="../../assets/img/marriege icon.png";
 public carImg="../../assets/img/car icon.png";
 public bikeImg="../../assets/img/bike icon.png";
 public luxuryCarImg="../../assets/img/starting business icon.png";
 public startingBusinessImg="../../assets/img/starting business icon.png";
 public selfDevelopmentImg="../../assets/img/self development icon.png";
 public childsEducationImg="../../assets/img/child's education icon.png";
 public childsMarriageImg="../../assets/img/child's marriege icon.png";
 public worldTourImg="../../assets/img/world tour icon.png";
 public wealthCreationImg="../../assets/img/wealth creation icon.png";
 public followPassionImg="../../assets/img/follow passion icon.png";
 public philanthropyImg="../../assets/img/Philanthropy icon.png";

 



  constructor(  private router : Router, private abs: AdityaBirlaServices) { }

  ngOnInit() {}

//Service method 
postData(){
    let userGoals=
      { 
        user_id:localStorage.getItem('id'),
        selectedgoals : this.goals
      }
      console.log(userGoals);
    this.abs.postGoalData("usergoals",userGoals).subscribe(data=>{
      console.log(data);
  });  
} 


//Adding Goals
  addRetirement(){
    if(this.goals.length < 3 && this.isRetirementPresent==false){
      var Retirement ={
        goalId:1,
        goal:"Retirement",
      }
      this.goals.push(Retirement);
      this.isRetirementPresent=true;
      console.log(this.goals);
      console.log(this.isRetirementPresent);
      this.retirementImg="../../assets/img/retirement color icon.png";
      
    }
     else if(this.goals.length <= 3 && this.isRetirementPresent==true){
    let data="Retirement";
    this.isRetirementPresent=false
     this.removeData(data);
     this.retirementImg="../../assets/img/retirement icon.png";
    }

  }  

  addHoliday(){
      if(this.goals.length < 3 && this.isHolidayPresent==false){
        var Holiday ={
          goalId:2,
          goal:"Holiday",
        }
        this.goals.push(Holiday);
        this.isHolidayPresent=true;
        console.log(this.goals);
        console.log(this.isHolidayPresent);
        this.holidayImg="../../assets/img/holiday color icon.png";
      }
       else if(this.goals.length <= 3 && this.isHolidayPresent==true){
      let data="Holiday";
      this.isHolidayPresent=false
       this.removeData(data);
       this.holidayImg="../../assets/img/holiday icon.png";
      }
  }

  addHoneymoon(){
    if(this.goals.length < 3 && this.isHoneymoonPresent==false){
      var Honeymoon ={
        goalId:3,
        goal:"Honeymoon",
      }
      this.goals.push(Honeymoon);
      this.isHoneymoonPresent=true;
      console.log(this.goals)
      this.honeyMoonImg="../../assets/img/honeymoon color icon.png";
    }
     else if(this.goals.length <= 3 && this.isHoneymoonPresent==true){
    let data="Honeymoon";
    this.isHoneymoonPresent=false
     this.removeData(data);
     this.honeyMoonImg="../../assets/img/honeymoon icon.png";
    }

  } 

  addMarriage(){
    if(this.goals.length < 3 && this.isMarriagePresent==false){
      var Marriage ={
        goalId:4,
        goal:"Marriage",
      }
      this.goals.push(Marriage);
      this.isMarriagePresent=true;
      console.log(this.goals);
      this.marriageImg="../../assets/img/marriege color icon.png";
    }
     else if(this.goals.length <= 3 && this.isMarriagePresent==true){
    let data="Marriage";
    this.isMarriagePresent=false
    this.marriageImg="../../assets/img/marriege icon.png";
    this.removeData(data);
    }

  } 

  addCar(){
    if(this.goals.length < 3 && this.isCarPresent==false){
      var Car ={
        goalId:5,
        goal:"Car",
      }
      this.goals.push(Car);
      this.isCarPresent=true;
      console.log(this.goals);
      this.carImg="../../assets/img/car color icon.png"
    }
     else if(this.goals.length <= 3 && this.isCarPresent==true){
    let data="Car";
    this.isCarPresent=false
     this.removeData(data);
     this.carImg="../../assets/img/car icon.png"
    }

  } 
  
  addBike(){
    if(this.goals.length < 3 && this.isBikePresent==false){
      var Bike ={
        goalId:6,
        goal:"Bike",
      }
      this.goals.push(Bike);
      this.isBikePresent=true;
      console.log(this.goals);
      this.bikeImg="../../assets/img/bike color icon.png"
    }
     else if(this.goals.length <= 3 && this.isBikePresent==true){
    let data="Bike";
    this.isBikePresent=false
     this.removeData(data);
     this.bikeImg="../../assets/img/bike icon.png"
    }

  } 
  
  addLuxuryCar(){
    if(this.goals.length < 3 && this.isLuxuryCarPresent==false){
      var LuxuryCar ={
        goalId:7,
        goal:LuxuryCar
      }
      this.isLuxuryCarPresent=true;
      console.log(this.goals);
      this.luxuryCarImg="../../assets/img/luxury car color icon.png"
    }
     else if(this.goals.length <= 3 && this.isLuxuryCarPresent==true){
    let data="Luxury Car";
    this.isLuxuryCarPresent=false
     this.removeData(data);
     this.luxuryCarImg="../../assets/img/luxury car icon.png"
    }

  } 
  
  addStartingBusiness(){
    if(this.goals.length < 3 && this.isStartingBusinessPresent==false){
      var StartingBusines ={
        goalId:8,
        goal:"Starting Busines",
      }
      this.goals.push(StartingBusines);
      this.isStartingBusinessPresent=true;
      console.log(this.goals)
      this.startingBusinessImg="../../assets/img/starting business color icon.png"
    }
     else if(this.goals.length <= 3 && this.isStartingBusinessPresent==true){
    let data="Starting Busines";
    this.isStartingBusinessPresent=false
     this.removeData(data);
     this.startingBusinessImg="../../assets/img/starting business icon.png"
    }

  } 
  
  addSelfDevelopment(){
    if(this.goals.length < 3 && this.isSelfDevelopmentPresent==false){
      var SelfDevelopment ={
        goalId:9,
        goal:"Self Development",
      }
      this.goals.push(SelfDevelopment);
      this.isSelfDevelopmentPresent=true;
      console.log(this.goals)
      this.selfDevelopmentImg="../../assets/img/self development color icon.png"
    }
     else if(this.goals.length <= 3 && this.isSelfDevelopmentPresent==true){
    let data="Self Development";
    this.isSelfDevelopmentPresent=false
     this.removeData(data);
     this.selfDevelopmentImg="../../assets/img/self development icon.png"
     
    }

  }
  
  addChildsEducation(){
    if(this.goals.length < 3 && this.isChildsEducationPresent==false){
      var ChildsEducation ={
        goalId:10,
        goal:"Childs Education",
      }
      this.goals.push(ChildsEducation);
      this.isChildsEducationPresent=true;
      console.log(this.goals)
      this.childsEducationImg="../../assets/img/child's education color icon.png"
    }
     else if(this.goals.length <= 3 && this.isChildsEducationPresent==true){
    let data="Childs Education";
    this.isChildsEducationPresent=false
     this.removeData(data);
     this.childsEducationImg="../../assets/img/child's education icon.png"
    }

  } 
  
  addChildsMarriage(){
    if(this.goals.length < 3 && this.isChildsMarriagePresent==false){
      var ChildsMarriage ={
        goalId:11,
        goal:"Childs Marriage",
      }
      this.goals.push(ChildsMarriage);
      this.isChildsMarriagePresent=true;
      console.log(this.goals)
      this.childsMarriageImg="../../assets/img/child's marriege color icon.png"
    }
     else if(this.goals.length <= 3 && this.isChildsMarriagePresent==true){
    let data="Childs Marriage";
    this.isChildsMarriagePresent=false
     this.removeData(data);
     this.childsMarriageImg="../../assets/img/child's marriege icon.png"
    }

  } 
  
  addWorldTour(){
    if(this.goals.length < 3 && this.isWorldTourPresent==false){
      var WorldTour ={
        goalId:12,
        goal:"World Tour",
      }
      this.goals.push(WorldTour);
      this.isWorldTourPresent=true;
      console.log(this.goals)
      this.worldTourImg="../../assets/img/world tour color icon.png"
    }
     else if(this.goals.length <= 3 && this.isWorldTourPresent==true){
    let data="World Tour";
    this.isWorldTourPresent=false
     this.removeData(data);
     this.worldTourImg="../../assets/img/world tour icon.png"
    }

  } 
  
  addWealthCreation(){
    if(this.goals.length < 3 && this.isWealthCreationPresent==false){
      var WealthCreation ={
        goalId:13,
        goal:"Wealth Creation",
      }
      this.goals.push(WealthCreation);
      this.isWealthCreationPresent=true;
      console.log(this.goals);
      this.wealthCreationImg="../../assets/img/waelth creation color icon.png"
    }
     else if(this.goals.length <= 3 && this.isWealthCreationPresent==true){
    let data="Wealth Creation";
    this.isWealthCreationPresent=false
     this.removeData(data);
     this.wealthCreationImg="../../assets/img/wealth creation icon.png"
    }

  } 
  
  addFollowPassion(){
    if(this.goals.length < 3 && this.isFollowPassionPresent==false){
      var FollowPassion ={
        goalId:14,
        goal:"Follow Passion",
      }
      this.goals.push(FollowPassion);
      this.isFollowPassionPresent=true;
      console.log(this.goals)
      this.followPassionImg="../../assets/img/follow passion color icon.png"
    }
     else if(this.goals.length <= 3 && this.isFollowPassionPresent==true){
    let data="Follow Passion";
    this.isFollowPassionPresent=false
     this.removeData(data);
     this.followPassionImg="../../assets/img/follow passion icon.png"
     

  } 
}

    addPhilanthropy(){
    if(this.goals.length < 3 && this.isPhilanthropyPresent==false){
      var Philanthropy ={
        goalId:15,
        goal:"Philanthropy",
      }
      this.goals.push(Philanthropy);
      this.isPhilanthropyPresent=true;
      console.log(this.goals)
      this.philanthropyImg="../../assets/img/philanthrophy color icon.png"
    }
     else if(this.goals.length <= 3 && this.isPhilanthropyPresent==true){
    let data="Philanthropy";
    this.isPhilanthropyPresent=false
     this.removeData(data);
     this.philanthropyImg="../../assets/img/Philanthropy icon.png"
    }

  } 
  
//Removing Goals  
removeData(value){
  console.log("data removed");
  for(let i=0; i<this.goals.length;i++){
    console.log(i)
    if(this.goals[i].goal==value){
      console.log("if statement excecuted successfully")
      this.goals.splice(i,1);
      console.log(this.goals);
    }
    console.log(this.goals);
    
  }
}
         
}

  
  // }
  

    

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


 


