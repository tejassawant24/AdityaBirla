import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icalculatorgoal } from '../Interfaces(Structure)/calculatorgoal';

@Injectable({providedIn:'root'})

export class AdityaBirlaServices{
    private calculatorgoal_post_url : string = 'http://localhost:3000/users';
   
   
   
    public headers:HttpHeaders;
    constructor( private http:HttpClient, ){
        this.headers = new HttpHeaders({
            'Content-Type':'application/json'
        });
    }

    postCalculatorgoal(data):Observable<Icalculatorgoal>{
        return this.http.post<Icalculatorgoal>(this.calculatorgoal_post_url, JSON.stringify(data), {headers:this.headers});
    }
}