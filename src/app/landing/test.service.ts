import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TestService {

    constructor(private httpClient: HttpClient) {
        this.get('https://github.com').subscribe(value =>{
        // value - результат
        console.log("value"); 
    },
    error => {
        // error - объект ошибки
        console.log("error");
    });
    }

    public get(url: string): Observable<any>{
        return this.httpClient.get(url);
    }

}