import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icalculatorgoal } from '../Interfaces(Structure)/calculatorgoal';
import { Igoal } from '../Interfaces(Structure)/goal';

@Injectable({providedIn:'root'})

export class AdityaBirlaServices{
    private calculatorgoal_post_url : string = 'http://localhost:3000/users';
    private goal_get_url :string ="http://localhost:3000/goals";
   
   
   
    public headers:HttpHeaders;
    constructor( private http:HttpClient, ){
        this.headers = new HttpHeaders({
            'Content-Type':'application/json'
        });
    }

    postCalculatorgoal(data):Observable<Icalculatorgoal>{
        return this.http.post<Icalculatorgoal>(this.calculatorgoal_post_url, JSON.stringify(data), {headers:this.headers});
    }
    getGoalData():Observable<Igoal>{
        return this.http.get<Igoal>(this.goal_get_url);
    }
}