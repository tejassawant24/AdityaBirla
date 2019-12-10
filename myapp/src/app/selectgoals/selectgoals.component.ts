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

  ngOnInit() {
    // this.abs.getGoalData().subscribe(data=>{
    //   console.log(data);
    //   this.goals=data;
    //   console.log(this.goals[0].goal);
    // });

  //   let images=[
  //   {
  //    image: "../../assets/img/retirement color icon.png"
  //   },
  //   {
  //     image:"../../assets/img/holiday icon.png"
  //   },
  //   {
  //     image:"../../assets//img/honeymoon icon.png"
  //   },
  //   {
  //     image:"../../assets/img/marriege icon.png"
  //   },
  //   {
  //     image:"../../assets/img/luxury car icon.png"
  //   },
  //   {
  //     image:"../../assets/img/bike color icon.png"
  //   },
  //   {
  //     image:"../../assets/img/luxury car icon.png"
  //   },
  //   {
  //     image:"../../assets/img/starting business icon.png"
  //   },
  //   {
  //     image:"../../assets/img/self development icon.png"
  //   },
  //   {
  //     image:"../../assets/img/child's education icon.png"
  //   },
  //   {
  //     image:"../../assets/img/child's marriege color icon.png"
  //   },
  //   {
  //     image:"../../assets/img/world tour icon.png"
  //   },
  //   {
  //     image:"../../assets/img/wealth creation icon.png"
  //   },
  //   {
  //     image:"../../assets/img/follow passion icon.png"
  //   },
  //   {
  //     image:"../../assets/img/Philanthropy icon.png"
  //   }
  // ]
  // console.log(images[0].image)
   }


  // test() {honeyMoonImg= 'goals');
  //   console.loretirementImg
postData(){
    this.abs.postGoalData(this.goals).subscribe(data=>{
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
      retirementImg
      
    }
     else if(this.goals.length <= 3 && this.isRetirementPresent==true){
    let data="Retirement";
    this.isRetirementPresent=false
     this.removeData(data);
     retirementImg
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
        holidayImg
      }
       else if(this.goals.length <= 3 && this.isHolidayPresent==true){
      let data="Holiday";
      this.isHolidayPresent=false
       this.removeData(data);
       holidayImg
      }
  }

  addHoneymoon(){
    if(this.goals.length < 3 && this.isHoneymoonPresent==false){
      var Honeymoon ={
        goalId:1,
        goal:"Honeymoon",
      }
      this.goals.push(Honeymoon);
      this.isHoneymoonPresent=true;
      console.log(this.goals)
      honeyMoonImg
    }
     else if(this.goals.length <= 3 && this.isHoneymoonPresent==true){
    let data="Honeymoon";
    this.isHoneymoonPresent=false
     this.removeData(data);
     honeyMoonImg
    }

  } 

  addMarriage(){
    if(this.goals.length < 3 && this.isMarriagePresent==false){
      var Marriage ={
        goalId:1,
        goal:"Marriage",
      }
      this.goals.push(Marriage);
      this.isMarriagePresent=true;
      console.log(this.goals);
      marriageImg
    }
     else if(this.goals.length <= 3 && this.isMarriagePresent==true){
    let data="Marriage";
    this.isMarriagePresent=false
    marriageImg

     this.removeData(data);
    }

  } 

  addCar(){
    if(this.goals.length < 3 && this.isCarPresent==false){
      var Car ={
        goalId:1,
        goal:"Car",
      }
      this.goals.push(Car);
      this.isCarPresent=true;
      console.log(this.goals);
      carImg
    }
     else if(this.goals.length <= 3 && this.isCarPresent==true){
    let data="Car";
    this.isCarPresent=false
     this.removeData(data);
     carImg
    }

  } 
  
  addBike(){
    if(this.goals.length < 3 && this.isBikePresent==false){
      var Bike ={
        goalId:1,
        goal:"Bike",
      }
      this.goals.push(Bike);
      this.isBikePresent=true;
      console.log(this.goals);
      bikeImg
    }
     else if(this.goals.length <= 3 && this.isBikePresent==true){
    let data="Bike";
    this.isBikePresent=false
     this.removeData(data);
     bikeImg
    }

  } 
  
  addLuxuryCar(){
    if(this.goals.length < 3 && this.isLuxuryCarPresent==false){
      var LuxuryCar ={
        goalId:1,
        goal:LuxuryCar
      }
      this.isLuxuryCarPresent=true;
      console.log(this.goals);
      luxuryCarImg
    }
     else if(this.goals.length <= 3 && this.isLuxuryCarPresent==true){
    let data="Luxury Car";
    this.isLuxuryCarPresent=false
     this.removeData(data);
     luxuryCarImg
    }

  } 
  
  addStartingBusiness(){
    if(this.goals.length < 3 && this.isStartingBusinessPresent==false){
      var StartingBusines ={
        goalId:1,
        goal:"Starting Busines",
      }
      this.goals.push(StartingBusines);
      this.isStartingBusinessPresent=true;
      console.log(this.goals)
      startingBusinessImg
    }
     else if(this.goals.length <= 3 && this.isStartingBusinessPresent==true){
    let data="Starting Busines";
    this.isStartingBusinessPresent=false
     this.removeData(data);
     startingBusinessImg
    }

  } 
  
  addSelfDevelopment(){
    if(this.goals.length < 3 && this.isSelfDevelopmentPresent==false){
      var SelfDevelopment ={
        goalId:1,
        goal:"Self Development",
      }
      this.goals.push(SelfDevelopment);
      this.isSelfDevelopmentPresent=true;
      console.log(this.goals)
      selfDevelopmentImg
    }
     else if(this.goals.length <= 3 && this.isSelfDevelopmentPresent==true){
    let data="Self Development";
    this.isSelfDevelopmentPresent=false
     this.removeData(data);
     selfDevelopmentImg
     
    }

  }
  
  addChildsEducation(){
    if(this.goals.length < 3 && this.isChildsEducationPresent==false){
      var ChildsEducation ={
        goalId:1,
        goal:"Childs Education",
      }
      this.goals.push(ChildsEducation);
      this.isChildsEducationPresent=true;
      console.log(this.goals)
      childsEducationImg
    }
     else if(this.goals.length <= 3 && this.isChildsEducationPresent==true){
    let data="Childs Education";
    this.isChildsEducationPresent=false
     this.removeData(data);
     childsEducationImg
    }

  } 
  
  addChildsMarriage(){
    if(this.goals.length < 3 && this.isChildsMarriagePresent==false){
      var ChildsMarriage ={
        goalId:1,
        goal:"Childs Marriage",
      }
      this.goals.push(ChildsMarriage);
      this.isChildsMarriagePresent=true;
      console.log(this.goals)
      childsMarriageImg
    }
     else if(this.goals.length <= 3 && this.isChildsMarriagePresent==true){
    let data="Childs Marriage";
    this.isChildsMarriagePresent=false
     this.removeData(data);
     childsMarriageImg
    }

  } 
  
  addWorldTour(){
    if(this.goals.length < 3 && this.isWorldTourPresent==false){
      var WorldTour ={
        goalId:1,
        goal:"World Tour",
      }
      this.goals.push(WorldTour);
      this.isWorldTourPresent=true;
      console.log(this.goals)
      worldTourImg
    }
     else if(this.goals.length <= 3 && this.isWorldTourPresent==true){
    let data="World Tour";
    this.isWorldTourPresent=false
     this.removeData(data);
     worldTourImg
    }

  } 
  
  addWealthCreation(){
    if(this.goals.length < 3 && this.isWealthCreationPresent==false){
      var WealthCreation ={
        goalId:1,
        goal:"Wealth Creation",
      }
      this.goals.push(WealthCreation);
      this.isWealthCreationPresent=true;
      console.log(this.goals);
      wealthCreationImg
    }
     else if(this.goals.length <= 3 && this.isWealthCreationPresent==true){
    let data="Wealth Creation";
    this.isWealthCreationPresent=false
     this.removeData(data);
     wealthCreationImg
    }

  } 
  
  addFollowPassion(){
    if(this.goals.length < 3 && this.isFollowPassionPresent==false){
      var FollowPassion ={
        goalId:1,
        goal:"Follow Passion",
      }
      this.goals.push(FollowPassion);
      this.isFollowPassionPresent=true;
      console.log(this.goals)
      followPassionImg
    }
     else if(this.goals.length <= 3 && this.isFollowPassionPresent==true){
    let data="Follow Passion";
    this.isFollowPassionPresent=false
     this.removeData(data);
     followPassionImg
    }

  } 

    
  addPhilanthropy(){
    if(this.goals.length < 3 && this.isPhilanthropyPresent==false){
      var Philanthropy ={
        goalId:1,
        goal:"Philanthropy",
      }
      this.goals.push(Philanthropy);
      this.isPhilanthropyPresent=true;
      console.log(this.goals)
      philanthropyImg
    }
     else if(this.goals.length <= 3 && this.isPhilanthropyPresent==true){
    let data="Philanthropy";
    this.isPhilanthropyPresent=false
     this.removeData(data);
     philanthropyImg
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
  
  philanthropyImg
    

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


 


