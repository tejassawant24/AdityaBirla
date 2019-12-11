import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icalculatorgoal } from '../Interfaces(Structure)/calculatorgoal';
import { Igoal } from '../Interfaces(Structure)/goal';

@Injectable({providedIn:'root'})

export class AdityaBirlaServices{
    // private calculatorgoal_post_url : string = 'http://localhost:3000/details';
    // private goal_post_url :string =" http://localhost:3000/selectgoals";
    public url=" http://localhost:3000/";
    private getgoals="  http://localhost:3300/goals"
   
   
   
    public headers:HttpHeaders;
    constructor( private http:HttpClient ){
        this.headers = new HttpHeaders({
            'Content-Type':'application/json'
        });
    }

    // postCalculatorgoal(data):Observable<Icalculatorgoal>{
    //     return this.http.post<Icalculatorgoal>(this.calculatorgoal_post_url, JSON.stringify(data), {headers:this.headers});
    // }
    postUserDetails(routename,data):Observable<Icalculatorgoal>{
        console.log(this.url+routename,data);
        console.log("postCalculatorgoal method executed")
        return this.http.post<Icalculatorgoal>(this.url+routename,data,{headers:this.headers});
    }
    // postGoalData(item):Observable<Igoal[]>{
    //     return this.http.post<Igoal[]>(this.goal_post_url, JSON.stringify(item), {headers:this.headers});
    // }
    postGoalData(routename,data):Observable<Igoal[]>{
        return this.http.post<Igoal[]>(this.url+routename,data,{headers:this.headers});
    }

    getGoalData(){
        return this.http.get(this.getgoals);
    }

    
    goalzzz=[
        {
        "type" :  "Retirement",
        "questions":[
            {q1:"What's your current age?"},
            {q2:"At what age you plan to retire?"},
            {q3:"What are your current annual expenses?"},
            {q4:"What is the expected rate of inflation? (Before Retirement)"},
            {q5:"What is the expected rate of return? (Before Retirement)"},
            {q6:"What is the expected rate of return on your retirement saving? (Post Retirement)"},
            {q7:"How much can you invest as lumpsum today for your retirement?"}
        ],
    },
    {
        "type" :  "Bike",
        "questions":[
            {},{},{},{},{},{}
        ],
        "answers":[
            {},{},{},{}
        ]
    },
    ]


    
}